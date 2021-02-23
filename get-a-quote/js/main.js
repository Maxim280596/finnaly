var tunaWizard =
    {
        stepCount: 0,
        slider: null,
        setResponsive: function ()
        {
            var nameThis = this;
            var height = $(window)['height']();
            var width = $(window)['width']();
            height = height > 360 ? height : 360;
            var signupContainer = $('.tuna-signup-container');
            var signupLeft = $('.tuna-signup-left');
            var signupRight = $('.tuna-signup-right');
            if (width >= 768)
            {
                signupContainer['add'](signupLeft)['add'](signupRight)['innerHeight'](height);

            }
            else
            {
                signupContainer['add'](signupLeft)['add'](signupRight)['css']('height', 'auto');




                // $('').each(function () {


                // })


            };

            var sliderContainer = $('.tuna-slider-container');
            if (height < 600 || width < 768)
            {
                sliderContainer['hide']()
            }
            else
            {
                sliderContainer['show']();
                nameThis['slider']['reloadSlider']()
            };
            if (height < 400)
            {
                $('.button-container')['css']('bottom', '50px')
            }
        },
        changeStep: function (stepConfirm, nextStep)
        {
            var self = this;
            if (nextStep <= 0 && nextStep > 10)
            {
                return false
            };


            if (nextStep === 6) {
				
            //    if ($('input[name=\'tn_money\']:checked')['val']() === '') {
             //       self['setInputError']($('input[name=\'tn_money\']'));
             //       return
            //    }
			  
            };
			
            if (nextStep === 3) {
				//alert($('input[name=\'tn_kind\']:checked')['val']());
              //  if ($('input[name=\'tn_kind\']:checked')['val']() === '') {
              //      self['setInputError']($('input[name=\'tn_kind\']'));
              //      return
              //  }
			  
            };			

           // if (nextStep === 2) {
               // if ($('input[name=\'tn_time\']:checked')['val']() === '') {
               //     self['setInputError']($('input[name=\'tn_time\']'));
               //     return
               // }
           // };


            if (nextStep === 5)
            {
                if ($('input[name=\'tn_hobbies[]\']:checked')['length'] > 3 )
                {
                    self['setInputError']($('input[name=\'tn_hobbies[]\']'));
                    return
                };
					
                if ($('input[name=\'tn_hobbies[]\']:checked')['length'] === 0 )
                {
						
                    //self['setInputError']($('input[name=\'tn_hobbies[]\']'));
                    //return
                };

            };


            if (nextStep === 5)
            {
               // if ($('#tn_voice')['val']()['trim']() === '')
               // {
               //     self['setInputError']($('#tn_voice'));
               //     return
               // }
            };
            if (nextStep === 2)
            {
                //if ($('#tn_name')['val']()['trim']() === '')
               // {
               //     self['setInputError']($('#tn_name'));
                //    return
                //}
            };

			if (nextStep === 4)
            {
               // if ($('#tn_url')['val']()['trim']() === '')
              //  {
               //     self['setInputError']($('#tn_url'));
               //     return
               // }
            };

            if (nextStep === 10)
            {
                if ($('#tn_email')['val']()['trim']() === '' || !self['isEmail']($('#tn_email')['val']()['trim']()))
                {
                    self['setInputError']($('#tn_email'));
                    return
                }
            };

            if (nextStep === 10)
            {
               // if ($('#tn_comment_one')['val']()['trim']() === '')
               // {
               //     self['setInputError']($('#tn_comment_one'));
               //     return
               // }
            };


            if (nextStep > stepConfirm)
            {
                $('.step-active')['removeClass']('step-active')['addClass']('step-hide')
            }
            else
            {
                $('.step-active')['removeClass']('step-active')
            };
            var _0xd1cfxb = $('.step[data-step-id=\'' + nextStep + '\']');
            _0xd1cfxb['removeClass']('step-hide')['addClass']('step-active');
            // window['setTimeout'](function ()
            // {
            //     if (nextStep !== self['stepCount'])
            //     {
            //         _0xd1cfxb['find']('input, textarea')['focus']();
            //     }
            // }, 500);
            var stepsCount = $('.steps-count');
            if (nextStep === self['stepCount'])
            {
                stepsCount['html']('CONFIRM DETAILS');
                $('.button-container')['hide']();
                var stepConfirm = $('.step-confirm');



				stepConfirm['find']('input[name=\'name\']')['val']($('#tn_name')['val']());
				stepConfirm['find']('input[name=\'url-site\']')['val']($('#tn_url')['val']());
                stepConfirm['find']('select[name=\'money\']')['selectpicker']('val', $('input[name=\'tn_money\']:checked')['val']());
				stepConfirm['find']('select[name=\'scriptw\']')['selectpicker']('val', $('input[name=\'tn_script\']:checked')['val']());
                stepConfirm['find']('select[name=\'time\']')['selectpicker']('val', $('input[name=\'tn_time\']:checked')['val']());
                var checkBox = $('input[name=\'tn_hobbies[]\']:checked')['map'](function ()
                {
                    return this['value']
                })['get']();
                stepConfirm['find']('select[name=\'hobbies[]\']')['selectpicker']('val', checkBox);
                stepConfirm['find']('input[name=\'voice\']')['val']($('#tn_voice')['val']());
                stepConfirm['find']('input[name=\'name\']')['val']($('#tn_name')['val']());
                stepConfirm['find']('input[name=\'email\']')['val']($('#tn_email')['val']());
                stepConfirm['find']('textarea[name=\'comment\']')['val']($('#tn_comment_one')['val']()+$('#tn_comment_two')['val']()+$('#tn_comment_three')['val']());



            };
            stepsCount['find']('span.step-current')['text'](nextStep);
            var prevStep = $('.prevStep');
			//alert(nextStep);
            if (nextStep === 1)
            {
                prevStep['hide']()
				setTimeout(function(){
					// $('input[name=tn_kind]:checked', '#block_kind')['focus']()
					$('input[name=tn_time]:checked', '#block_time')['focus']()
				}, 200);
            }
            else
            {
                prevStep['css']('display', 'inline-block')
            }
	
			//if (nextStep === 2 )
           // {
			//	setTimeout(function(){
			//		$('input[name=tn_time]:checked', '#block_time')['focus']()
			//	}, 200);	
			//}				
			
			if (nextStep === 2 )
            {
				setTimeout(function(){
					$('input[name=tn_money]:checked', '#block_money')['focus']()
				}, 200);	
			}	

			if (nextStep === 3 )
            {
				setTimeout(function(){
					$('input[name=tn_script]:checked', '#block_script')['focus']()
				}, 200);	
			}				
			
			if (nextStep === 4 )
            {
				//!$('input[name=\'agreement\']')['prop']('checked')
				if ($('input[name=\'tn_hobbies[]\']:checked')['length'] === 0 )
                {
					setTimeout(function(){
						$('#tn_style_radio1')['focus']();
						//$('#tn_style_radio1')['attr']('checked', 'checked');
						$('#tn_style_radio1')['trigger']('click');
						//alert($('#tn_style_radio1')['attr']('checked'));
					}, 200);	
                } else {
					//var checkBox2[] = $('input[name=\'tn_hobbies[]\']:checked');
					var checkBox = $('input[name=\'tn_hobbies[]\']:checked')['map'](function ()
                {
                    return this['value']
                })['get']();
					//var checkBox1 = $('input[name=\'tn_hobbies[]\']:checked')['map'];
						//alert(checkBox);
					var selectedCheckBox =  checkBox[0].slice(checkBox[0].indexOf('Style ')+6, checkBox[0].indexOf('Style ')+7);
						//alert('x'+selectedCheckBox+'x');
						//alert(checkBox2);
					setTimeout(function(){
						$('#tn_style_radio'+selectedCheckBox)['focus']();
						//$('#tn_style_radio1')['attr']('checked', 'checked');
						//alert($('#tn_style_radio1')['attr']('checked'));
					}, 200);							
					
				};

			}

			
			if (nextStep === 5 )
            {
				setTimeout(function(){
					$('#tn_voice')['focus']()
				}, 200);	
			}
			
			if (nextStep === 6 )
            {
				setTimeout(function(){
					$('#tn_comment_one')['focus']()
				}, 200);	
			}	

			if (nextStep === 7 )
            {
				setTimeout(function(){
					$('#tn_name')['focus']()
				}, 200);	
			}				
			
			if (nextStep === 8 )
            {
				setTimeout(function(){
					$('#tn_url')['focus']()
				}, 200);	
			}	
			
			if (nextStep === 9 )
            {
				setTimeout(function(){
					$('#tn_email')['focus']()
				}, 200);	
			}				

            var width = $(window).width();
            if (width < 600)
            {
                if (nextStep === 1 || nextStep === 2 || nextStep === 3 || nextStep === 4 || nextStep === 5 || nextStep === 6 || nextStep === 7 || nextStep === 8 || nextStep === 9 || nextStep === 10 )
                {
                    $('html, body, .tuna-signup-container').css('overflow', 'scroll');
                }
                else
                {
                     $('html, body, .tuna-signup-container').css('overflow', 'hidden');
                }
                if ( nextStep === 1 || nextStep === 2 || nextStep === 3 || nextStep === 6 || nextStep === 5 || nextStep === 7 || nextStep === 8 || nextStep === 9 || nextStep === 10)
                {
                    $('.container').css('overflow-y', 'hidden');
                    $('.tuna-signup-right').css('min-height', '660px');
                }
                else
                {
                    $('.container').css('overflow-y', 'visible');
                    $('.tuna-signup-right').css('min-height', '1800px');
                }
                if (nextStep === 11)
                {
                    $('.container').css('overflow-y', 'hidden');
                    $('.tuna-signup-right').css('min-height', '800px');
                }
            }
            if (width < 600 && width > 410 )
                if ( nextStep === 4)
                {
                     $('.tuna-signup-right').css('min-height', '2000px');
                }
        },
        setInputError: function (paramErorr)
        {
            paramErorr['addClass']('input-error');
            paramErorr['parents']('.step')['find']('.help-info')['hide']();
            paramErorr['parents']('.step')['find']('.help-error')['show']()
        },
        isEmail: function (paramIsMail)
        {
            paramIsMail = paramIsMail['toLowerCase']();
            var mailPattern = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
            return mailPattern['test'](paramIsMail)
        },
        start: function ()
        {
            var thisParam = this;
            thisParam['slider'] = $('.tuna-slider')['bxSlider'](
                {
                    controls: false,
                    auto: true,
                    mode: 'horizontal',
                    pager: true,
                    speed: 500,
                    pause: 5000
                });
            $('.tuna-signup-container input[type=\'checkbox\'],.tuna-signup-container input[type=\'radio\'], .select')['uniform']();
            $('.tuna-signup-container input[name="phone"],.tuna-signup-container input[name="tn_phone"]')['mask']('000 000 00 00');
            window['setTimeout'](function ()
            {
                //$('#tn_name')['focus']()
				//$('input[name=tn_kind]:checked', '#block_kind')['focus']()
				$('input[name=tn_time]:checked', '#block_time')['focus']()
            }, 500);
            thisParam['setResponsive']();
            $(window)['resize'](function ()
            {
                thisParam['setResponsive']()
            });
            thisParam['stepCount'] = $('.tuna-steps .step')['length'];
            $('.step-count')['text'](thisParam['stepCount']);
            $('.nextStep, .skip_voice')['on']('click', function ()
            {
                var stepActiveNextParamm = $('.step-active')['attr']('data-step-id');
                var stepNext = parseFloat(stepActiveNextParamm) + 1;
                thisParam['changeStep'](stepActiveNextParamm, stepNext)
				
            });
            $('.prevStep')['on']('click', function ()
            {
                var stepActivePrevParamm = $('.step-active')['attr']('data-step-id');
                var stepPrev = parseFloat(stepActivePrevParamm) - 1;
                thisParam['changeStep'](stepActivePrevParamm, stepPrev)
            });
            var stepConfirm = $('.step-confirm');
            stepConfirm['find']('.input-container a.editInput')['on']('click', function ()
            {
                $(this)['parent']()['find']('input, textarea')['focus']()
            });
            stepConfirm['find']('.input-container a.showPass')['on']('mousedown', function ()
            {
                $(this)['parent']()['find']('input, textarea')['attr']('type', 'text')
            })['mouseup'](function ()
            {
                $(this)['parent']()['find']('input, textarea')['attr']('type', 'password')
            });
            stepConfirm['find']('.input-container input, .input-container textarea')['on']('focus', function ()
            {
                $(this)['parent']()['find']('a')['hide']()
            });
            stepConfirm['find']('.input-container input,.input-container textarea')['on']('focusout', function ()
            {
                if (!$(this)['hasClass']('confirm-input-error'))
                {
                    $(this)['parent']()['find']('a')['show']()
                }
            });
            stepConfirm['find']('select')['on']('shown.bs.select', function (_0xd1cfx12)
            {
                $(this)['parents']('.form-group')['find']('a.editInput')['hide']()
            })['on']('hidden.bs.select', function (_0xd1cfx12)
            {
                $(this)['parents']('.form-group')['find']('a.editInput')['show']()
            });
            $('.step input')['not']('.step-confirm input')['on']('keypress', function (stepParamKeyPressEnter)
			//$('.tuna-signup-right')['not']('.step-confirm input')['on']('keypress', function (stepParamKeyPressEnter)
            {
				//alert('enter');
                if (stepParamKeyPressEnter['keyCode'] === 13)
                {
                   // $('.nextStep')['click']()
                }
            });
			$(document).keypress(function(e) {
                if (e.which === 13)
                {
                    $('.nextStep')['click']()
                }
			});
			
			$('#tn_style_radio1').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 39:
							$('#tn_style_radio1')['trigger']('click');	
							$('#tn_style_radio2')['trigger']('click');		
							$('#tn_style_radio2')['focus']();	
							break;
						case 40:
							$('#tn_style_radio1')['trigger']('click');	
							$('#tn_style_radio4')['trigger']('click');		
							$('#tn_style_radio4')['focus']();		
							break;
					}
				}
			});		

			$('#tn_style_radio2').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 37:
							$('#tn_style_radio1')['trigger']('click');	
							$('#tn_style_radio2')['trigger']('click');		
							$('#tn_style_radio1')['focus']();	
							break;						
						case 39:
							$('#tn_style_radio2')['trigger']('click');	
							$('#tn_style_radio3')['trigger']('click');		
							$('#tn_style_radio3')['focus']();	
							break;
						case 40:
							$('#tn_style_radio2')['trigger']('click');	
							$('#tn_style_radio5')['trigger']('click');		
							$('#tn_style_radio5')['focus']();		
							break;
					}
				}
			});	
			
			$('#tn_style_radio3').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 37:
							$('#tn_style_radio3')['trigger']('click');	
							$('#tn_style_radio2')['trigger']('click');		
							$('#tn_style_radio2')['focus']();	
							break;						
						case 40:
							$('#tn_style_radio3')['trigger']('click');	
							$('#tn_style_radio6')['trigger']('click');		
							$('#tn_style_radio6')['focus']();		
							break;
					}
				}
			});	

			$('#tn_style_radio4').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 38:
							$('#tn_style_radio4')['trigger']('click');	
							$('#tn_style_radio1')['trigger']('click');		
							$('#tn_style_radio1')['focus']();	
							break;						
						case 39:
							$('#tn_style_radio4')['trigger']('click');	
							$('#tn_style_radio5')['trigger']('click');		
							$('#tn_style_radio5')['focus']();	
							break;
					}
				}
			});		

			$('#tn_style_radio5').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 37:
							$('#tn_style_radio5')['trigger']('click');	
							$('#tn_style_radio4')['trigger']('click');		
							$('#tn_style_radio4')['focus']();	
							break;						
						case 39:
							$('#tn_style_radio5')['trigger']('click');	
							$('#tn_style_radio6')['trigger']('click');		
							$('#tn_style_radio6')['focus']();	
							break;
						case 38:
							$('#tn_style_radio2')['trigger']('click');	
							$('#tn_style_radio5')['trigger']('click');		
							$('#tn_style_radio2')['focus']();		
							break;
					}
				}
			});		

			$('#tn_style_radio6').keyup(function(e) {
				var lBox = $('input[name=\'tn_hobbies[]\']:checked')['length'];
				if (lBox === 1) { 
					switch (e.which) {
						case 37:
							$('#tn_style_radio6')['trigger']('click');	
							$('#tn_style_radio5')['trigger']('click');		
							$('#tn_style_radio5')['focus']();	
							break;						
						case 38:
							$('#tn_style_radio6')['trigger']('click');	
							$('#tn_style_radio3')['trigger']('click');		
							$('#tn_style_radio3')['focus']();	
							break;
					}
				}
			});				
			
            var signupForm = $('form[name=\'signupForm\']');
            signupForm['find']('input')['on']('keypress', function (formParamKeyPressEnter)
            {
                if (formParamKeyPressEnter['keyCode'] === 13)
                {
                    signupForm['submit']()
                }
            });
            $('.finishBtn')['on']('click', function ()
            {
                signupForm['submit']()
            });
            signupForm['on']('submit', function (e)
            {
                e['preventDefault']();
                $(this)['find']('.confirm-input-error')['removeClass']('confirm-input-error');





                var nameMoney = $(this)['find']('select[name=\'money\']');
                if (nameMoney['val']() === '')
                {
                    nameMoney['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameTime = $(this)['find']('select[name=\'time\']');
                if (nameTime['val']() === '')
                {
                    nameTime['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameCheckbox = $(this)['find']('select[name=\'hobbies[]\']');
                console['log'](nameCheckbox);
                if (nameCheckbox['find']('option:selected')['length'] === 0)
                {
                    nameCheckbox['parents']('.bootstrap-select')['addClass']('confirm-input-error')['focus']();
                    nameCheckbox['selectpicker']('toggle');
                    return
                };
                var nameVoice = $(this)['find']('input[name=\'voice\']');
                if (nameVoice['val']()['trim']() === '')
                {
					nameVoice['val'](' ');
                    //nameVoice['addClass']('confirm-input-error')['focus']();
                    //return
                };
                var nameName = $(this)['find']('input[name=\'name\']');
                if (nameName['val']()['trim']() === '')
                {
					nameName['val'](' ');
                //    nameName['addClass']('confirm-input-error')['focus']();
                 //   return
                };
                var nameEmail = $(this)['find']('input[name=\'email\']');
                if (nameEmail['val']()['trim']() === '' || !thisParam['isEmail'](nameEmail['val']()['trim']()))
                {
                    nameEmail['addClass']('confirm-input-error')['focus']();
                    return
                };
                var nameComment = $(this)['find']('textarea[name=\'comment\']');
                if (nameComment['val']()['trim']() === '')
                {
					nameComment['val'](' ');
                //    nameComment['addClass']('confirm-input-error')['focus']();
                 //   return
                };





                // if (!$('input[name=\'agreement\']')['prop']('checked'))
                // {
                //     swal(
                //         {
                //             title: 'Warning!',
                //             text: 'You must agree with the terms and conditions.',
                //             type: 'warning',
                //             confirmButtonText: 'Ok'
                //         });
                //     return
                // };
                swal(
                    {
                        title: null,
                        text: '<img class=\'tuna_loading\' src=\'https://beemloop.com/get-a-quote/img/loading.svg\'/> Saving...',
                        html: true,
                        showConfirmButton: false
                    });
                $['post']('https://beemloop.com/get-a-quote/php/main.php', $(this)['serialize']() + '&uploadedFiles=' + tunaWizard['uploadedFiles'], function (data)
                {
                    if (data.response == 'ok')
                    {
                        setTimeout(function() {
                        swal(
                            {
                                title: 'Success',
                                text: 'Your information submitted successfully! We have received your message and we"ll get back to you within 24 hours',
                                type: 'success',
                                confirmButtonText: 'Go To Home Page'}, function() {
                                    window.location = "https://beemloop.com/";
                                });
                        }, 1000);
                    }
                    else
                    {
                        swal(
                            {
                                title: 'Error!',
                                text: data['msg'],
                                type: 'error',
                                confirmButtonText: 'Ok'
                            })
                    }
                }, 'json')
            })
        }
    };
$['fn']['materialInput'] = function ()
{
    var materialInput;
    var This = this;
    This['find']('input.formInput, textarea.formInput')['keydown'](function (_0xd1cfx12)
    {
		$this_id = this.id;	
		if (( $this_id != 'tn_comment_one') && ( $this_id != 'tn_comment_two') && ( $this_id != 'tn_comment_three')) {
			
			This['setLabel'](_0xd1cfx12['target']);
			This['checkFocused'](_0xd1cfx12['target'])
		} else {
			
				This['setLabel'](_0xd1cfx12['target']);
				This['checkFocused'](_0xd1cfx12['target'])
		}
    });
    This['find']('input.formInput, textarea.formInput')['focusout'](function (_0xd1cfx12)
    {
        This['setLabel'](_0xd1cfx12['target']);
        This['checkUnFocused'](_0xd1cfx12['target'])
    });
    this['setLabel'] = function (_0xd1cfx1a)
    {
        materialInput = This['find']('label[for=' + _0xd1cfx1a['id'] + ']')
    };
    this['getLabel'] = function ()
    {
        return materialInput
    };
    this['checkFocused'] = function (_0xd1cfx1a)
    {
        This['getLabel']()['addClass']('active', '');
        $(_0xd1cfx1a)['removeClass']('input-error');
       // $(_0xd1cfx1a)['next']()['hide']();
	   $('.help-error')['hide']();
        $(_0xd1cfx1a)['parent']()['find']('.info')['show']()
    };
    this['checkUnFocused'] = function (_0xd1cfx1a)
    {
        if ($(_0xd1cfx1a)['val']()['length'] === 0)
        {
            This['getLabel']()['removeClass']('active')
        }
    }
};
$(document)['ready'](function ()
{
    $('.tuna-loader-container')['fadeOut']('slow');
    $('.tuna-signup-container')['show']();
    $('.tuna-steps')['materialInput']();
    $('.selectpicker')['selectpicker']();
	//$('.tuna-signup-right').css('min-height', '660px');
	//$('.tuna-signup-left').css('min-height', '214px');
    tunaWizard['start']()
});



// var signupRight = $('.tuna-signup-right');
// if ($("#test").hasClass('step-active')) {
//     signupRight.css('min-height', '2300px');
// } else {
//     signupRight.css('min-height', '331px');
// }
$(document).ready(function(){
	var sHTML = '';
		sHTML +='<div class="modal modal-warning fade" id="ModalWarning" tabindex="-1" role="dialog" aria-labelledby="ModalWarning">';
		sHTML +='	<div class="modal-dialog" role="document">';
		sHTML +='		<div class="modal-content">';
		sHTML +='			<div class="modal-header">';
		sHTML +='				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		sHTML +='				<h4 class="modal-title" id="CommonLabel">Konfirmasi</h4>';
		sHTML +='			</div>';
		sHTML +='			<div class="modal-body">';
		sHTML +='				<div class="row">';
		sHTML +='					<div class="col-xs-12 text-center">';
		sHTML +='						<div class="warning">';
		sHTML +='							<i class="fa fa-warning fa-5x"></i>';
		sHTML +='						</div>';
		sHTML +='						<h4 id="CommonMessage">Yakin ingin menghapus data ini ?</h4>';
		sHTML +='					</div>';
		sHTML +='				</div>';
		sHTML +='			</div>';
		sHTML +='		  	<div class="modal-footer">';
		sHTML +='				<div class="row">';
		sHTML +='					<div class="col-xs-12 text-center">';
		sHTML +='						<button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-back"></i> Tidak</button>';
		sHTML +='						<button type="button" class="btn btn-danger" id="btnConfirm"><i class="fa fa-trash"></i> Ya</button>';
		sHTML +='					</div>';
		sHTML +='				</div>';
		sHTML +='			</div>';
		sHTML +='		</div>';
		sHTML +='	 </div>';
		sHTML +='</div>';
	($(sHTML).appendTo(document.body));	
	
	var kHTML = '';
		kHTML +='<div class="modal modal-success fade" id="ModalSuccess" tabindex="-1" role="dialog" aria-labelledby="ModalSuccess">';
		kHTML +='	<div class="modal-dialog" role="document">';
		kHTML +='		<div class="modal-content">';
		kHTML +='			<div class="modal-header">';
		kHTML +='				<h4 class="modal-title" id="CommonLabel">Berhasil</h4>';
		kHTML +='			</div>';
		kHTML +='			<div class="modal-body">';
		kHTML +='				<div class="row">';
		kHTML +='					<div class="col-xs-12 text-center">';
		kHTML +='						<div class="success">';
		kHTML +='							<i class="fa fa-check fa-5x"></i>';
		kHTML +='						</div>';
		kHTML +='						<h4 id="CommonMessageSuccess">Selamat Data Berhasil di hapus</h4>';
		kHTML +='					</div>';
		kHTML +='				</div>';
		kHTML +='			</div>';
		kHTML +='		  	<div class="modal-footer">';
		kHTML +='				<div class="row">';
		kHTML +='					<div class="col-xs-12 text-center">';
		kHTML +='						<button type="button" class="btn btn-default" id="btn-tutup-success" onclick="closeMsgSuccess()"><i class="fa fa-back"></i> Tutup</button>';
		kHTML +='					</div>';
		kHTML +='				</div>';
		kHTML +='			</div>';
		kHTML +='		</div>';
		kHTML +='	 </div>';
		kHTML +='</div>';
	($(kHTML).appendTo(document.body));	
	
	var eHTML = '';
		eHTML +='<div class="modal modal-danger fade" id="ModalError" tabindex="-1" role="dialog" aria-labelledby="ModalError">';
		eHTML +='	<div class="modal-dialog" role="document">';
		eHTML +='		<div class="modal-content">';
		eHTML +='			<div class="modal-header">';
		eHTML +='				<h4 class="modal-title" id="CommonLabel">Pesan</h4>';
		eHTML +='			</div>';
		eHTML +='			<div class="modal-body">';
		eHTML +='				<div class="row">';
		eHTML +='					<div class="col-xs-12 text-center">';
		eHTML +='						<div class="danger">';
		eHTML +='							<i class="fa fa-remove fa-5x"></i>';
		eHTML +='						</div>';
		eHTML +='						<h4 id="CommonMessageError"></h4>';
		eHTML +='					</div>';
		eHTML +='				</div>';
		eHTML +='			</div>';
		eHTML +='		  	<div class="modal-footer">';
		eHTML +='				<div class="row">';
		eHTML +='					<div class="col-xs-12 text-center">';
		eHTML +='						<button type="button" class="btn btn-default" id="btn-tutup-error" onclick="closeMsgError()"><i class="fa fa-back"></i> Tutup</button>';
		eHTML +='					</div>';
		eHTML +='				</div>';
		eHTML +='			</div>';
		eHTML +='		</div>';
		eHTML +='	 </div>';
		eHTML +='</div>';
	($(eHTML).appendTo(document.body));	
	
	var dHTML = '';
		dHTML +='<div class="modal fade" id="MOdalstatus" tabindex="-1" role="dialog" aria-labelledby="MOdalstatus">';
		dHTML +='	<div class="modal-dialog" role="document">';
		dHTML +='		<div class="modal-content">';
		dHTML +='			<div class="modal-header">';
		dHTML +='				<h4 class="modal-title" id="CommonLabel">Status</h4>';
		dHTML +='			</div>';
		dHTML +='			<div class="modal-body">';
		dHTML +='				<div class="row">';
		dHTML +='					<div class="col-xs-12 text-center">';
		dHTML +='						<label class="radio-inline">';
		dHTML +='							<input type="radio" name="status_id" id="status_id" value="101"> Waiting';
		dHTML +='						</label>';
		dHTML +='						<label class="radio-inline">';
		dHTML +='							<input type="radio" name="status_id" id="status_id" value="102"> Pending';
		dHTML +='						</label>';
		dHTML +='						<label class="radio-inline">';
		dHTML +='							<input type="radio" name="status_id" id="status_id" value="103"> Cancel';
		dHTML +='						</label>';
		dHTML +='						<label class="radio-inline">';
		dHTML +='							<input type="radio" name="status_id" id="status_id" value="104"> Expired';
		dHTML +='						</label>';
		dHTML +='						<label class="radio-inline">';
		dHTML +='							<input type="radio" name="status_id" id="status_id" value="105"> Success';
		dHTML +='						</label>';
		dHTML +='					</div>';
		dHTML +='				</div>';
		dHTML +='				<div class="row">';
		dHTML +='					<div class="col-xs-12">';
		dHTML +='						<h4>Reason</h4>';
		dHTML +='						<textarea class="form-control" rows="3" name="reason" id="reason"></textarea>';
		dHTML +='					</div>';
		dHTML +='				</div>';
		dHTML +='			</div>';
		dHTML +='		  	<div class="modal-footer">';
		dHTML +='				<div class="row">';
		dHTML +='					<div class="col-xs-12 text-center">';
		dHTML +='						<button type="button" class="btn btn-primary" id="btn-confirmstatus"><i class="fa fa-back"></i> Confirm</button>';
		dHTML +='						<button type="button" class="btn btn-default" id="btn-tutup-error" data-dismiss="modal"><i class="fa fa-back"></i> Cancel</button>';
		dHTML +='					</div>';
		dHTML +='				</div>';
		dHTML +='			</div>';
		dHTML +='		</div>';
		dHTML +='	 </div>';
		dHTML +='</div>';
	($(dHTML).appendTo(document.body));	

	
});

function get_publish(url, id, control_div){
	$.ajax({
		type:'get',
		url: url+"/onoff/"+id,
        beforeSend: function(){
			$(control_div).empty();
        },
        success: function(response){
			if(response == 'Y'){
				$(control_div).append("<button class='btn btn-sm btn-success'><i class='fa fa-check'></i> Ya</button>");
			} else {
				$(control_div).append("<button class='btn btn-sm btn-danger'><i class='fa fa-remove'></i> Tidak</button>");
			}
        },
        dataType:"html"  		
    });
    return false;
}

function showMsgSuccess(msg)
{
	$('#ModalSuccess').modal({keyboard: false,backdrop: 'static'}); 
	$("#CommonMessageSuccess").empty();
	$("#CommonMessageSuccess").append(msg);
}

function showMsgError(msg)
{
	$('#ModalError').modal({keyboard: false,backdrop: 'static'}); 
	$("#CommonMessageError").empty();
	$("#CommonMessageError").append(msg);
}

function closeMsgSuccess() {
	$("#CommonMessageSuccess").empty();
	$('#ModalSuccess').modal('hide');
}

function closeMsgError() {
	$("#CommonMessageError").empty();
	$('#ModalError').modal('hide');
}

function modal_confirm(url,class_id)
{
	$('#ModalWarning').modal({keyboard: false,backdrop: 'static'}); 
	$('#btnConfirm').click(function(){
		$.ajax({
			type:'GET',
			url: url+"/destroy/"+class_id,
			beforeSend: function(){
				$('#btnConfirm').hide();
			},
			success: function(data)
			{
				var jsData=(data).replace(/\s/g ," ");
				var result = eval('('+jsData+')');
				if(result.result == true)
				{
					$('#ModalWarning').modal('hide');
					showMsgSuccess(result.resultMsg);
					$("#btn-tutup-success").click(function() {
						location.href = url;
					});
				}
				else
				{
					$('#ModalWarning').modal('hide');
					showMsgError(result.resultMsg);
					$("#btn-tutup-success").click(function() {
						location.href = url;
					});
				}
			},
			error : function(d) {
			  //alert(d);
			}
		});
	});
}

function modal_status(url,register_id)
{
	$('#MOdalstatus').modal({keyboard: false,backdrop: 'static'}); 
	$('#btn-confirmstatus').click(function(){
		var radioValue = $("input[name='status_id']:checked"). val();
		var reason = $('textarea#reason').val();
		$.ajax({
			type:'POST',
			url: url+"/get_status_update",
			data: {register_id : register_id, status_id : radioValue, reason : reason},
			beforeSend: function(){
				$('#btn-confirmstatus').hide();
			},
			success: function(data)
			{
				var jsData=(data).replace(/\s/g ," ");
				var result = eval('('+jsData+')');
				if(result.result == true)
				{
					$('#MOdalstatus').modal('hide');
					$('#btn-confirmstatus').show();
					showMsgSuccess(result.resultMsg);
					$("#btn-tutup").click(function() {
						location.href = url;
					});
				}
				else
				{
					$('#MOdalstatus').modal('hide');
					$('#btn-confirmstatus').show();
					showMsgError(result.resultMsg);
					$("#btn-tutup").click(function() {
						location.href = url;
					});
				}
			},
			error : function(d) {
			  //alert(d);
			}
		});
	});
}

function get_search(ActionURL,type)
{
	if(type == 0){$('#Sfield').empty();} else{
		$.ajax({
			type:'GET',
			url: ActionURL + type,
			success: function (response) {
				$('#Sfield').empty();
				document.getElementById("Sfield").innerHTML=response; 
			}
		});
	}
}

function get_kabupaten(province_id)
{
	$.ajax({
		type:'GET',
		url: base_url + "dataguru/get_kabupaten?province_id=" + province_id,
		success: function (response) {
			$('#kabupaten_id').empty();
			document.getElementById("kabupaten_id").innerHTML=response; 
		}
	});
}

function get_kecamatan(kabupaten_id)
{
	$.ajax({
		type: 'GET',
		url: base_url + "dataguru/get_kecamatan?kabupaten_id=" + kabupaten_id,
		success: function (response) {
			$('#kecamatan_id').empty();
			document.getElementById("kecamatan_id").innerHTML=response; 
		}
	});
}

function get_desa(kecamatan_id)
{
	$.ajax({
		type: 'GET',
		url: base_url + "dataguru/get_desa?kecamatan_id=" + kecamatan_id,
		success: function (response) {
			$('#desa_id').empty();
			document.getElementById("desa_id").innerHTML=response; 
		}
	});
}

function get_postal(desa_id)
{
	$.ajax({
		type: 'GET',
		url: base_url + "dataguru/get_postal?desa_id=" + desa_id,
		success: function (response) {
			$('#postal_code').empty();
			$('#postal_code').append(response);
		}
	});
}

function get_edit(ActionURL, frmName, returnUrl)
{
	$.ajax({
		type:'POST',
		url: ActionURL,
		data: $(frmName).serialize(),
		beforeSend: function(){
			$('#btnProcess').hide();
		},
		success: function(data)
		{
			$('#btnProcess').show();
			
			var jsData=(data).replace(/\s/g ," ");
			var result = eval('('+jsData+')');
			if(result.result == true)
			{
				showMsgSuccess(result.resultMsg);
				$("#btn-tutup-success").click(function() {
					location.href = returnUrl;
				});
				
			}else{					

				showMsgError(result.resultMsg);		
			}
		},
		error : function(d) {
		  //alert(d);
		}
	});
}

function get_common(ActionURL, frmName, returnUrl)
{
	$.ajax({
		type:'POST',
		url: ActionURL,
		data: $(frmName).serialize(),
		beforeSend: function(){
			$('#btnProcess').hide();
		},
		success: function(data)
		{
			$('#btnProcess').show();
			
			var jsData=(data).replace(/\s/g ," ");
			var result = eval('('+jsData+')');
			if(result.result == true)
			{
				showMsgSuccess(result.resultMsg);
				$("#btn-tutup-success").click(function() {
					location.href = returnUrl;
				});
				
			}else{					

				showMsgError(result.resultMsg);		
			}
		},
		error : function(d) {
		  //alert(d);
		}
	});
}
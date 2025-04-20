/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { LtmDocumentClassificationMasksApi } from './LtmDocumentClassificationMasksApi';
import { NoYes } from './NoYes';
import { LtmAssignType } from './LtmAssignType';
import { LtmEntryType } from './LtmEntryType';

/**
 * This class represents the entity "LTMDocumentClassificationMasks" of service "d365_metadata".
 */
export class LtmDocumentClassificationMasks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationMasksType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationMasks.
   */
  static override _entityName = 'LTMDocumentClassificationMasks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationMasks entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Msk Bank Pos Enabled.
   * @nullable
   */
  declare mskBankPosEnabled?: NoYes | null;
  /**
   * Msk Proj Doc Num Mandatory.
   * @nullable
   */
  declare mskProjDocNumMandatory?: NoYes | null;
  /**
   * Msk Bank Doc Num No Validate Mask.
   * @nullable
   */
  declare mskBankDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Fa Doc Num Assign Type.
   * @nullable
   */
  declare mskFaDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Bank Pos Entry Type.
   * @nullable
   */
  declare mskBankPosEntryType?: LtmEntryType | null;
  /**
   * Msk Glpos Mandatory.
   * @nullable
   */
  declare mskGlposMandatory?: NoYes | null;
  /**
   * Msk Vend Doc Num Assign Type.
   * @nullable
   */
  declare mskVendDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Cust Pos Mask.
   * @nullable
   */
  declare mskCustPosMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Glpos Mask.
   * @nullable
   */
  declare mskGlposMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Cust Pos Mandatory.
   * @nullable
   */
  declare mskCustPosMandatory?: NoYes | null;
  /**
   * Msk Cust Preserve Assigned Num.
   * @nullable
   */
  declare mskCustPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Inv Doc Num Mask.
   * @nullable
   */
  declare mskInvDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Inv Pos Length.
   */
  declare mskInvPosLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Fa Doc Num Mask.
   * @nullable
   */
  declare mskFaDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Bank Doc Num Mask.
   * @nullable
   */
  declare mskBankDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Vend Pos Entry Type.
   * @nullable
   */
  declare mskVendPosEntryType?: LtmEntryType | null;
  /**
   * Msk Fapos Enabled.
   * @nullable
   */
  declare mskFaposEnabled?: NoYes | null;
  /**
   * Msk Vend Doc Num No Validate Mask.
   * @nullable
   */
  declare mskVendDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Proy Preserve Assigned Num.
   * @nullable
   */
  declare mskProyPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Vend Doc Num Mask.
   * @nullable
   */
  declare mskVendDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Gl Doc Num Assign Type.
   * @nullable
   */
  declare mskGlDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Inv Doc Num Entry Type.
   * @nullable
   */
  declare mskInvDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Cust Doc Num Entry Type.
   * @nullable
   */
  declare mskCustDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Proj Doc Num Length.
   */
  declare mskProjDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Cust Doc Num Assign Type.
   * @nullable
   */
  declare mskCustDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Inv Doc Num No Validate Mask.
   * @nullable
   */
  declare mskInvDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Vend Doc Num Entry Type.
   * @nullable
   */
  declare mskVendDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Fapos Mask.
   * @nullable
   */
  declare mskFaposMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Proj Pos Length.
   */
  declare mskProjPosLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Fa Doc Num Length.
   */
  declare mskFaDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Proj Doc Num No Validate Mask.
   * @nullable
   */
  declare mskProjDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Proj Doc Num Entry Type.
   * @nullable
   */
  declare mskProjDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Bank Pos Mandatory.
   * @nullable
   */
  declare mskBankPosMandatory?: NoYes | null;
  /**
   * Msk Glpos Length.
   */
  declare mskGlposLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Cust Pos Length.
   */
  declare mskCustPosLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Inv Preserve Assigned Num.
   * @nullable
   */
  declare mskInvPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Bank Doc Num Length.
   */
  declare mskBankDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Fa Doc Num No Validate Mask.
   * @nullable
   */
  declare mskFaDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Inv Doc Num Mandatory.
   * @nullable
   */
  declare mskInvDocNumMandatory?: NoYes | null;
  /**
   * Msk Inv Pos Mask.
   * @nullable
   */
  declare mskInvPosMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Glpos Enabled.
   * @nullable
   */
  declare mskGlposEnabled?: NoYes | null;
  /**
   * Msk Vend Pos Mask.
   * @nullable
   */
  declare mskVendPosMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Vend Preserve Assigned Num.
   * @nullable
   */
  declare mskVendPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Glpos Entry Type.
   * @nullable
   */
  declare mskGlposEntryType?: LtmEntryType | null;
  /**
   * Msk Bank Doc Num Entry Type.
   * @nullable
   */
  declare mskBankDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Bank Preserve Assigned Num.
   * @nullable
   */
  declare mskBankPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Inv Doc Num Assign Type.
   * @nullable
   */
  declare mskInvDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Vend Pos Length.
   */
  declare mskVendPosLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Inv Pos Entry Type.
   * @nullable
   */
  declare mskInvPosEntryType?: LtmEntryType | null;
  /**
   * Msk Cust Doc Num Mandatory.
   * @nullable
   */
  declare mskCustDocNumMandatory?: NoYes | null;
  /**
   * Msk Bank Pos Length.
   */
  declare mskBankPosLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Gl Doc Num No Validate Mask.
   * @nullable
   */
  declare mskGlDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Proj Pos Enabled.
   * @nullable
   */
  declare mskProjPosEnabled?: NoYes | null;
  /**
   * Msk Inv Pos Mandatory.
   * @nullable
   */
  declare mskInvPosMandatory?: NoYes | null;
  /**
   * Msk Bank Pos Mask.
   * @nullable
   */
  declare mskBankPosMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Cust Pos Enabled.
   * @nullable
   */
  declare mskCustPosEnabled?: NoYes | null;
  /**
   * Msk Fa Doc Num Entry Type.
   * @nullable
   */
  declare mskFaDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Proj Pos Mask.
   * @nullable
   */
  declare mskProjPosMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Cust Doc Num Length.
   */
  declare mskCustDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Fapos Length.
   */
  declare mskFaposLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Proj Doc Num Assign Type.
   * @nullable
   */
  declare mskProjDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Bank Doc Num Assign Type.
   * @nullable
   */
  declare mskBankDocNumAssignType?: LtmAssignType | null;
  /**
   * Msk Inv Pos Enabled.
   * @nullable
   */
  declare mskInvPosEnabled?: NoYes | null;
  /**
   * Msk Fapos Mandatory.
   * @nullable
   */
  declare mskFaposMandatory?: NoYes | null;
  /**
   * Msk Proj Pos Mandatory.
   * @nullable
   */
  declare mskProjPosMandatory?: NoYes | null;
  /**
   * Msk Fapos Entry Type.
   * @nullable
   */
  declare mskFaposEntryType?: LtmEntryType | null;
  /**
   * Msk Proj Pos Entry Type.
   * @nullable
   */
  declare mskProjPosEntryType?: LtmEntryType | null;
  /**
   * Msk Inv Doc Num Length.
   */
  declare mskInvDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Gl Doc Num Length.
   */
  declare mskGlDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Msk Cust Pos Entry Type.
   * @nullable
   */
  declare mskCustPosEntryType?: LtmEntryType | null;
  /**
   * Msk Vend Doc Num Mandatory.
   * @nullable
   */
  declare mskVendDocNumMandatory?: NoYes | null;
  /**
   * Msk Cust Doc Num Mask.
   * @nullable
   */
  declare mskCustDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Vend Pos Enabled.
   * @nullable
   */
  declare mskVendPosEnabled?: NoYes | null;
  /**
   * Msk Gl Doc Num Mask.
   * @nullable
   */
  declare mskGlDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Bank Doc Num Mandatory.
   * @nullable
   */
  declare mskBankDocNumMandatory?: NoYes | null;
  /**
   * Msk Vend Pos Mandatory.
   * @nullable
   */
  declare mskVendPosMandatory?: NoYes | null;
  /**
   * Msk Gl Preserve Assigned Num.
   * @nullable
   */
  declare mskGlPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Cust Doc Num No Validate Mask.
   * @nullable
   */
  declare mskCustDocNumNoValidateMask?: NoYes | null;
  /**
   * Msk Gl Doc Num Mandatory.
   * @nullable
   */
  declare mskGlDocNumMandatory?: NoYes | null;
  /**
   * Msk Fa Doc Num Mandatory.
   * @nullable
   */
  declare mskFaDocNumMandatory?: NoYes | null;
  /**
   * Msk Proj Doc Num Mask.
   * @nullable
   */
  declare mskProjDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Msk Gl Doc Num Entry Type.
   * @nullable
   */
  declare mskGlDocNumEntryType?: LtmEntryType | null;
  /**
   * Msk Fa Preserve Assigned Num.
   * @nullable
   */
  declare mskFaPreserveAssignedNum?: NoYes | null;
  /**
   * Msk Vend Doc Num Length.
   */
  declare mskVendDocNumLength: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: LtmDocumentClassificationMasksApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationMasksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  mskBankPosEnabled?: NoYes | null;
  mskProjDocNumMandatory?: NoYes | null;
  mskBankDocNumNoValidateMask?: NoYes | null;
  mskFaDocNumAssignType?: LtmAssignType | null;
  mskBankPosEntryType?: LtmEntryType | null;
  mskGlposMandatory?: NoYes | null;
  mskVendDocNumAssignType?: LtmAssignType | null;
  mskCustPosMask?: DeserializedType<T, 'Edm.String'> | null;
  mskGlposMask?: DeserializedType<T, 'Edm.String'> | null;
  mskCustPosMandatory?: NoYes | null;
  mskCustPreserveAssignedNum?: NoYes | null;
  mskInvDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskInvPosLength: DeserializedType<T, 'Edm.Int32'>;
  mskFaDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskBankDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskVendPosEntryType?: LtmEntryType | null;
  mskFaposEnabled?: NoYes | null;
  mskVendDocNumNoValidateMask?: NoYes | null;
  mskProyPreserveAssignedNum?: NoYes | null;
  mskVendDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskGlDocNumAssignType?: LtmAssignType | null;
  mskInvDocNumEntryType?: LtmEntryType | null;
  mskCustDocNumEntryType?: LtmEntryType | null;
  mskProjDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskCustDocNumAssignType?: LtmAssignType | null;
  mskInvDocNumNoValidateMask?: NoYes | null;
  mskVendDocNumEntryType?: LtmEntryType | null;
  mskFaposMask?: DeserializedType<T, 'Edm.String'> | null;
  mskProjPosLength: DeserializedType<T, 'Edm.Int32'>;
  mskFaDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskProjDocNumNoValidateMask?: NoYes | null;
  mskProjDocNumEntryType?: LtmEntryType | null;
  mskBankPosMandatory?: NoYes | null;
  mskGlposLength: DeserializedType<T, 'Edm.Int32'>;
  mskCustPosLength: DeserializedType<T, 'Edm.Int32'>;
  mskInvPreserveAssignedNum?: NoYes | null;
  mskBankDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskFaDocNumNoValidateMask?: NoYes | null;
  mskInvDocNumMandatory?: NoYes | null;
  mskInvPosMask?: DeserializedType<T, 'Edm.String'> | null;
  mskGlposEnabled?: NoYes | null;
  mskVendPosMask?: DeserializedType<T, 'Edm.String'> | null;
  mskVendPreserveAssignedNum?: NoYes | null;
  mskGlposEntryType?: LtmEntryType | null;
  mskBankDocNumEntryType?: LtmEntryType | null;
  mskBankPreserveAssignedNum?: NoYes | null;
  mskInvDocNumAssignType?: LtmAssignType | null;
  mskVendPosLength: DeserializedType<T, 'Edm.Int32'>;
  mskInvPosEntryType?: LtmEntryType | null;
  mskCustDocNumMandatory?: NoYes | null;
  mskBankPosLength: DeserializedType<T, 'Edm.Int32'>;
  mskGlDocNumNoValidateMask?: NoYes | null;
  mskProjPosEnabled?: NoYes | null;
  mskInvPosMandatory?: NoYes | null;
  mskBankPosMask?: DeserializedType<T, 'Edm.String'> | null;
  mskCustPosEnabled?: NoYes | null;
  mskFaDocNumEntryType?: LtmEntryType | null;
  mskProjPosMask?: DeserializedType<T, 'Edm.String'> | null;
  mskCustDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskFaposLength: DeserializedType<T, 'Edm.Int32'>;
  mskProjDocNumAssignType?: LtmAssignType | null;
  mskBankDocNumAssignType?: LtmAssignType | null;
  mskInvPosEnabled?: NoYes | null;
  mskFaposMandatory?: NoYes | null;
  mskProjPosMandatory?: NoYes | null;
  mskFaposEntryType?: LtmEntryType | null;
  mskProjPosEntryType?: LtmEntryType | null;
  mskInvDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskGlDocNumLength: DeserializedType<T, 'Edm.Int32'>;
  mskCustPosEntryType?: LtmEntryType | null;
  mskVendDocNumMandatory?: NoYes | null;
  mskCustDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskVendPosEnabled?: NoYes | null;
  mskGlDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskBankDocNumMandatory?: NoYes | null;
  mskVendPosMandatory?: NoYes | null;
  mskGlPreserveAssignedNum?: NoYes | null;
  mskCustDocNumNoValidateMask?: NoYes | null;
  mskGlDocNumMandatory?: NoYes | null;
  mskFaDocNumMandatory?: NoYes | null;
  mskProjDocNumMask?: DeserializedType<T, 'Edm.String'> | null;
  mskGlDocNumEntryType?: LtmEntryType | null;
  mskFaPreserveAssignedNum?: NoYes | null;
  mskVendDocNumLength: DeserializedType<T, 'Edm.Int32'>;
}

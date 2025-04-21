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
import type { LtmLedgerJournalTransApi } from './LtmLedgerJournalTransApi';
import { NoYes } from './NoYes';
import { LtmCheckSource } from './LtmCheckSource';
import { LtmCollectPaymDocAction } from './LtmCollectPaymDocAction';

/**
 * This class represents the entity "LTMLedgerJournalTrans" of service "d365_metadata".
 */
export class LtmLedgerJournalTrans<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmLedgerJournalTransType<T>
{
  /**
   * Technical entity name for LtmLedgerJournalTrans.
   */
  static override _entityName = 'LTMLedgerJournalTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmLedgerJournalTrans entity.
   */
  static _keys = ['dataAreaId', 'LineNum', 'Voucher', 'JournalNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Num.
   */
  declare journalNum: DeserializedType<T, 'Edm.String'>;
  /**
   * Paym Term Id.
   * @nullable
   */
  declare paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preserve Num.
   * @nullable
   */
  declare preserveNum?: NoYes | null;
  /**
   * Sales Point Prefix.
   * @nullable
   */
  declare salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Document Num.
   * @nullable
   */
  declare completeDocumentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 07.
   * @nullable
   */
  declare listFieldCode07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 06.
   * @nullable
   */
  declare listFieldCode06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 05.
   * @nullable
   */
  declare listFieldCode05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 04.
   * @nullable
   */
  declare listFieldCode04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 03.
   * @nullable
   */
  declare listFieldCode03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 02.
   * @nullable
   */
  declare listFieldCode02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 01.
   * @nullable
   */
  declare listFieldCode01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 09.
   * @nullable
   */
  declare listFieldCode09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 08.
   * @nullable
   */
  declare listFieldCode08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Beneficiary.
   * @nullable
   */
  declare beneficiary?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Cheque Num.
   * @nullable
   */
  declare bankChequeNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field Code 10.
   * @nullable
   */
  declare listFieldCode10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Cur.
   */
  declare amountCur: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Concept.
   * @nullable
   */
  declare isConcept?: NoYes | null;
  /**
   * Concept 3.
   * @nullable
   */
  declare concept3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exch Rate.
   */
  declare exchRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cpd Source.
   * @nullable
   */
  declare cpdSource?: LtmCheckSource | null;
  /**
   * Country Doc Num.
   * @nullable
   */
  declare countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 2.
   * @nullable
   */
  declare concept2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Base Mst.
   */
  declare withholdingBaseMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cpd Cust Posting Profile.
   * @nullable
   */
  declare cpdCustPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bussiness Name.
   * @nullable
   */
  declare bussinessName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Document Date.
   */
  declare documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Document Num.
   * @nullable
   */
  declare documentNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Collect Paym Doc.
   * @nullable
   */
  declare isCollectPaymDoc?: NoYes | null;
  /**
   * Withholding Effective Rate.
   */
  declare withholdingEffectiveRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Document Classification Id.
   * @nullable
   */
  declare documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Id.
   * @nullable
   */
  declare bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Type Id.
   * @nullable
   */
  declare stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 1.
   * @nullable
   */
  declare concept1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Caicae Due Date.
   */
  declare caicaeDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Country Doc Type Id.
   * @nullable
   */
  declare countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cpd Action.
   * @nullable
   */
  declare cpdAction?: LtmCollectPaymDocAction | null;
  /**
   * Due Date.
   */
  declare dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Caicae.
   * @nullable
   */
  declare caicae?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withhold Accrued Base Mst.
   */
  declare withholdAccruedBaseMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Num.
   * @nullable
   */
  declare accountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Treasury Actual.
   * @nullable
   */
  declare treasuryActual?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 10.
   * @nullable
   */
  declare listField10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Code.
   * @nullable
   */
  declare controlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Payer Type Id.
   * @nullable
   */
  declare taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 09.
   * @nullable
   */
  declare listField09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 08.
   * @nullable
   */
  declare listField08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 05.
   * @nullable
   */
  declare listField05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 04.
   * @nullable
   */
  declare listField04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 07.
   * @nullable
   */
  declare listField07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 06.
   * @nullable
   */
  declare listField06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 01.
   * @nullable
   */
  declare listField01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 03.
   * @nullable
   */
  declare listField03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Num.
   * @nullable
   */
  declare stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * List Field 02.
   * @nullable
   */
  declare listField02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Treasury Enter.
   * @nullable
   */
  declare treasuryEnter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holder Account Num.
   * @nullable
   */
  declare holderAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shift Id.
   * @nullable
   */
  declare shiftId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withholding Set Id.
   * @nullable
   */
  declare withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Num.
   * @nullable
   */
  declare bankAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Withhold Accrued Amount Mst.
   */
  declare withholdAccruedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Point Id.
   * @nullable
   */
  declare salesPointId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmLedgerJournalTransApi<T>) {
    super(_entityApi);
  }
}

export interface LtmLedgerJournalTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  journalNum: DeserializedType<T, 'Edm.String'>;
  paymTermId?: DeserializedType<T, 'Edm.String'> | null;
  preserveNum?: NoYes | null;
  salesPointPrefix?: DeserializedType<T, 'Edm.String'> | null;
  completeDocumentNum?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode07?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode06?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode05?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode04?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode03?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode02?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode01?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode09?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode08?: DeserializedType<T, 'Edm.String'> | null;
  beneficiary?: DeserializedType<T, 'Edm.String'> | null;
  bankChequeNum?: DeserializedType<T, 'Edm.String'> | null;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  listFieldCode10?: DeserializedType<T, 'Edm.String'> | null;
  amountCur: DeserializedType<T, 'Edm.Decimal'>;
  isConcept?: NoYes | null;
  concept3?: DeserializedType<T, 'Edm.String'> | null;
  exchRate: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  cpdSource?: LtmCheckSource | null;
  countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  concept2?: DeserializedType<T, 'Edm.String'> | null;
  withholdingBaseMst: DeserializedType<T, 'Edm.Decimal'>;
  cpdCustPostingProfile?: DeserializedType<T, 'Edm.String'> | null;
  bussinessName?: DeserializedType<T, 'Edm.String'> | null;
  documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  documentNum?: DeserializedType<T, 'Edm.String'> | null;
  isCollectPaymDoc?: NoYes | null;
  withholdingEffectiveRate: DeserializedType<T, 'Edm.Decimal'>;
  documentClassificationId?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  concept1?: DeserializedType<T, 'Edm.String'> | null;
  caicaeDueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  cpdAction?: LtmCollectPaymDocAction | null;
  dueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  caicae?: DeserializedType<T, 'Edm.String'> | null;
  withholdAccruedBaseMst: DeserializedType<T, 'Edm.Decimal'>;
  accountNum?: DeserializedType<T, 'Edm.String'> | null;
  treasuryActual?: DeserializedType<T, 'Edm.String'> | null;
  listField10?: DeserializedType<T, 'Edm.String'> | null;
  controlCode?: DeserializedType<T, 'Edm.String'> | null;
  taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  listField09?: DeserializedType<T, 'Edm.String'> | null;
  listField08?: DeserializedType<T, 'Edm.String'> | null;
  listField05?: DeserializedType<T, 'Edm.String'> | null;
  listField04?: DeserializedType<T, 'Edm.String'> | null;
  listField07?: DeserializedType<T, 'Edm.String'> | null;
  listField06?: DeserializedType<T, 'Edm.String'> | null;
  listField01?: DeserializedType<T, 'Edm.String'> | null;
  listField03?: DeserializedType<T, 'Edm.String'> | null;
  stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  listField02?: DeserializedType<T, 'Edm.String'> | null;
  treasuryEnter?: DeserializedType<T, 'Edm.String'> | null;
  holderAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  shiftId?: DeserializedType<T, 'Edm.String'> | null;
  withholdingSetId?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountNum?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdAccruedAmountMst: DeserializedType<T, 'Edm.Decimal'>;
  salesPointId?: DeserializedType<T, 'Edm.String'> | null;
}

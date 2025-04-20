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
import type { VoucherTypeAccountRestrictionsV2Api } from './VoucherTypeAccountRestrictionsV2Api';
import { LedgerVoucherRestrictionTypeCn } from './LedgerVoucherRestrictionTypeCn';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { TableGroupAll } from './TableGroupAll';
import { NoYes } from './NoYes';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "VoucherTypeAccountRestrictionsV2" of service "d365_metadata".
 */
export class VoucherTypeAccountRestrictionsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VoucherTypeAccountRestrictionsV2Type<T>
{
  /**
   * Technical entity name for VoucherTypeAccountRestrictionsV2.
   */
  static override _entityName = 'VoucherTypeAccountRestrictionsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VoucherTypeAccountRestrictionsV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'VoucherType',
    'RestrictionType',
    'NotNullableLedgerDimensionDisplayValue',
    'AccountType',
    'AccountCode',
    'AccountRelation'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher Type.
   */
  declare voucherType: DeserializedType<T, 'Edm.String'>;
  /**
   * Restriction Type.
   * @nullable
   */
  declare restrictionType?: LedgerVoucherRestrictionTypeCn | null;
  /**
   * Not Nullable Ledger Dimension Display Value.
   */
  declare notNullableLedgerDimensionDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Account Code.
   * @nullable
   */
  declare accountCode?: TableGroupAll | null;
  /**
   * Account Relation.
   */
  declare accountRelation: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Approved By.
   * @nullable
   */
  declare defaultApprovedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Type Number.
   * @nullable
   */
  declare voucherTypeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Print Layout Group.
   * @nullable
   */
  declare ledgerPrintLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Defaulted Prepared By.
   * @nullable
   */
  declare defaultedPreparedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Default Type.
   * @nullable
   */
  declare isDefaultType?: NoYes | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: VoucherTypeAccountRestrictionsV2Api<T>) {
    super(_entityApi);
  }
}

export interface VoucherTypeAccountRestrictionsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucherType: DeserializedType<T, 'Edm.String'>;
  restrictionType?: LedgerVoucherRestrictionTypeCn | null;
  notNullableLedgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>;
  accountType?: LedgerJournalAcType | null;
  accountCode?: TableGroupAll | null;
  accountRelation: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  defaultApprovedBy?: DeserializedType<T, 'Edm.String'> | null;
  voucherTypeNumber?: DeserializedType<T, 'Edm.String'> | null;
  ledgerPrintLayoutGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultedPreparedBy?: DeserializedType<T, 'Edm.String'> | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  isDefaultType?: NoYes | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}

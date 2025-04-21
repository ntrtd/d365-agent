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
import type { PurchCommitmentLineEntitiesApi } from './PurchCommitmentLineEntitiesApi';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PurchCommitmentLineEntities" of service "d365_metadata".
 */
export class PurchCommitmentLineEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchCommitmentLineEntitiesType<T>
{
  /**
   * Technical entity name for PurchCommitmentLineEntities.
   */
  static override _entityName = 'PurchCommitmentLineEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchCommitmentLineEntities entity.
   */
  static _keys = ['dataAreaId', 'CommitmentNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Commitment Number.
   */
  declare commitmentNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Line Number.
   */
  declare agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Number.
   * @nullable
   */
  declare agreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Date.
   */
  declare lineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Commitment Name.
   * @nullable
   */
  declare commitmentName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Fiscal Calendar Calendar Id.
   * @nullable
   */
  declare fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Original Amount.
   */
  declare originalAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fiscal Calendar Year Name.
   * @nullable
   */
  declare fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Account.
   * @nullable
   */
  declare vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Date.
   */
  declare defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Comment.
   * @nullable
   */
  declare reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PurchCommitmentLineEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchCommitmentLineEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  commitmentNumber: DeserializedType<T, 'Edm.String'>;
  agreementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  agreementNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commitmentName?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  lineNumber: DeserializedType<T, 'Edm.Int64'>;
  fiscalCalendarCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  originalAmount: DeserializedType<T, 'Edm.Decimal'>;
  fiscalCalendarYearName?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccount?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonComment?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}

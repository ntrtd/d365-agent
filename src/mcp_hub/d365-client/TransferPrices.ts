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
import type { TransferPricesApi } from './TransferPricesApi';
import { ProjTransferPriceTransType } from './ProjTransferPriceTransType';
import { ProjTransferPriceModel } from './ProjTransferPriceModel';
import { ProjectResources, ProjectResourcesType } from './ProjectResources';
import { Currencies, CurrenciesType } from './Currencies';
import {
  ResourceCategories,
  ResourceCategoriesType
} from './ResourceCategories';

/**
 * This class represents the entity "TransferPrices" of service "d365_metadata".
 */
export class TransferPrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransferPricesType<T>
{
  /**
   * Technical entity name for TransferPrices.
   */
  static override _entityName = 'TransferPrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransferPrices entity.
   */
  static _keys = [
    'dataAreaId',
    'ResourceId',
    'BorrowingLegalEntity',
    'ProjectId',
    'CategoryId',
    'EffectiveDate',
    'SalesCurrency',
    'TransactionType',
    'ProjectContractId',
    'RoleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Borrowing Legal Entity.
   */
  declare borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   */
  declare projectId: DeserializedType<T, 'Edm.String'>;
  /**
   * Category Id.
   */
  declare categoryId: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Currency.
   */
  declare salesCurrency: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: ProjTransferPriceTransType | null;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Role Id.
   */
  declare roleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transfer Price Model.
   * @nullable
   */
  declare transferPriceModel?: ProjTransferPriceModel | null;
  /**
   * Pricing.
   */
  declare pricing: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProjectResources} entity.
   */
  declare resources?: ProjectResources<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currencies?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link ResourceCategories} entity.
   */
  declare resourceRoles?: ResourceCategories<T> | null;

  constructor(_entityApi: TransferPricesApi<T>) {
    super(_entityApi);
  }
}

export interface TransferPricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  borrowingLegalEntity: DeserializedType<T, 'Edm.String'>;
  projectId: DeserializedType<T, 'Edm.String'>;
  categoryId: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesCurrency: DeserializedType<T, 'Edm.String'>;
  transactionType?: ProjTransferPriceTransType | null;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  roleId: DeserializedType<T, 'Edm.String'>;
  transferPriceModel?: ProjTransferPriceModel | null;
  pricing: DeserializedType<T, 'Edm.Decimal'>;
  resources?: ProjectResourcesType<T> | null;
  currencies?: CurrenciesType<T> | null;
  resourceRoles?: ResourceCategoriesType<T> | null;
}

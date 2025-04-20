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
import type { BillingCodeVersionsApi } from './BillingCodeVersionsApi';
import { NoYes } from './NoYes';
import { RateField } from './RateField';

/**
 * This class represents the entity "BillingCodeVersions" of service "d365_metadata".
 */
export class BillingCodeVersions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BillingCodeVersionsType<T>
{
  /**
   * Technical entity name for BillingCodeVersions.
   */
  static override _entityName = 'BillingCodeVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingCodeVersions entity.
   */
  static _keys = ['dataAreaId', 'ValidTo', 'ValidFrom', 'BillingCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Billing Code.
   */
  declare billingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Use Line Values For Unspecified Dimensions.
   * @nullable
   */
  declare useLineValuesForUnspecifiedDimensions?: NoYes | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Changes To Ledger Accounts.
   * @nullable
   */
  declare allowChangesToLedgerAccounts?: NoYes | null;
  /**
   * Billing Code Description.
   * @nullable
   */
  declare billingCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Changes To Project.
   * @nullable
   */
  declare allowChangesToProject?: NoYes | null;
  /**
   * Interest Code.
   * @nullable
   */
  declare interestCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount Details.
   * @nullable
   */
  declare amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rate Type.
   * @nullable
   */
  declare rateType?: RateField | null;
  /**
   * Allow Changes To Project Category.
   * @nullable
   */
  declare allowChangesToProjectCategory?: NoYes | null;
  /**
   * Use Interest Code From Billing Classification.
   * @nullable
   */
  declare useInterestCodeFromBillingClassification?: NoYes | null;
  /**
   * Allow Change Amount On Invoice.
   * @nullable
   */
  declare allowChangeAmountOnInvoice?: NoYes | null;
  /**
   * Project Category.
   * @nullable
   */
  declare projectCategory?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BillingCodeVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface BillingCodeVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  billingCode: DeserializedType<T, 'Edm.String'>;
  useLineValuesForUnspecifiedDimensions?: NoYes | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  allowChangesToLedgerAccounts?: NoYes | null;
  billingCodeDescription?: DeserializedType<T, 'Edm.String'> | null;
  allowChangesToProject?: NoYes | null;
  interestCode?: DeserializedType<T, 'Edm.String'> | null;
  amountDetails?: DeserializedType<T, 'Edm.String'> | null;
  rateType?: RateField | null;
  allowChangesToProjectCategory?: NoYes | null;
  useInterestCodeFromBillingClassification?: NoYes | null;
  allowChangeAmountOnInvoice?: NoYes | null;
  projectCategory?: DeserializedType<T, 'Edm.String'> | null;
}

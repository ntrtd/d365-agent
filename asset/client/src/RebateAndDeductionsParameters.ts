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
import type { RebateAndDeductionsParametersApi } from './RebateAndDeductionsParametersApi';
import { NoYes } from './NoYes';
import { TamRebateItemOrderReference } from './TamRebateItemOrderReference';
import { TamRebateWarningError } from './TamRebateWarningError';
import {
  RebateStatusTables,
  RebateStatusTablesType
} from './RebateStatusTables';

/**
 * This class represents the entity "RebateAndDeductionsParameters" of service "d365_metadata".
 */
export class RebateAndDeductionsParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsParametersType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsParameters.
   */
  static override _entityName = 'RebateAndDeductionsParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Rebate And Deductions Activated.
   * @nullable
   */
  declare isRebateAndDeductionsActivated?: NoYes | null;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Will Rebate Deal Posting Automatically Post Free Text Invoice.
   * @nullable
   */
  declare willRebateDealPostingAutomaticallyPostFreeTextInvoice?: NoYes | null;
  /**
   * Is Claim Process Enabled.
   * @nullable
   */
  declare isClaimProcessEnabled?: NoYes | null;
  /**
   * Rebate Deal Posting Order Rebate Reference Defaulting Option.
   * @nullable
   */
  declare rebateDealPostingOrderRebateReferenceDefaultingOption?: TamRebateItemOrderReference | null;
  /**
   * Will Rebate Deal Posting Post By Financial Dimension.
   * @nullable
   */
  declare willRebateDealPostingPostByFinancialDimension?: NoYes | null;
  /**
   * Previously Processed Error Level.
   * @nullable
   */
  declare previouslyProcessedErrorLevel?: TamRebateWarningError | null;
  /**
   * Will Rebate Deal Posting Automatically Post Journal.
   * @nullable
   */
  declare willRebateDealPostingAutomaticallyPostJournal?: NoYes | null;
  /**
   * Default Rebate And Deductions Status Id.
   * @nullable
   */
  declare defaultRebateAndDeductionsStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Will Rebate Deal Posting Include Order Journal.
   * @nullable
   */
  declare willRebateDealPostingIncludeOrderJournal?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RebateStatusTables} entity.
   */
  declare rebateAndDeductionsStatus?: RebateStatusTables<T> | null;

  constructor(_entityApi: RebateAndDeductionsParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  isRebateAndDeductionsActivated?: NoYes | null;
  key: DeserializedType<T, 'Edm.Int32'>;
  willRebateDealPostingAutomaticallyPostFreeTextInvoice?: NoYes | null;
  isClaimProcessEnabled?: NoYes | null;
  rebateDealPostingOrderRebateReferenceDefaultingOption?: TamRebateItemOrderReference | null;
  willRebateDealPostingPostByFinancialDimension?: NoYes | null;
  previouslyProcessedErrorLevel?: TamRebateWarningError | null;
  willRebateDealPostingAutomaticallyPostJournal?: NoYes | null;
  defaultRebateAndDeductionsStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willRebateDealPostingIncludeOrderJournal?: NoYes | null;
  rebateAndDeductionsStatus?: RebateStatusTablesType<T> | null;
}

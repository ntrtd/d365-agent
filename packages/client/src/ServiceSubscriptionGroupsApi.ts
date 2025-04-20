/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ServiceSubscriptionGroups } from './ServiceSubscriptionGroups';
import { ServiceSubscriptionGroupsRequestBuilder } from './ServiceSubscriptionGroupsRequestBuilder';
import { NoYes } from './NoYes';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ServiceSubscriptionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ServiceSubscriptionGroups<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ServiceSubscriptionGroupsApi<DeSerializersT> {
    return new ServiceSubscriptionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ServiceSubscriptionGroups;

  requestBuilder(): ServiceSubscriptionGroupsRequestBuilder<DeSerializersT> {
    return new ServiceSubscriptionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ServiceSubscriptionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ServiceSubscriptionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ServiceSubscriptionGroups<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ServiceSubscriptionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ServiceSubscriptionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_SUBSCRIPTION_NUMBER_SEQUENCE_CODE: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVOICE_FREQUENCY_PERIOD_TYPE_CODE: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_FREQUENCY_PERIOD_TYPE_CODE: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REVENUE_ACCRUED: EnumField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      ServiceSubscriptionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ServiceSubscriptionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serviceSubscriptionNumberSequenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_SUBSCRIPTION_NUMBER_SEQUENCE_CODE:
          fieldBuilder.buildEdmTypeField(
            'ServiceSubscriptionNumberSequenceCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link invoiceFrequencyPeriodTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_FREQUENCY_PERIOD_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'InvoiceFrequencyPeriodTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualFrequencyPeriodTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_FREQUENCY_PERIOD_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'AccrualFrequencyPeriodTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isRevenueAccrued} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REVENUE_ACCRUED: fieldBuilder.buildEnumField(
          'IsRevenueAccrued',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ServiceSubscriptionGroups)
      };
    }

    return this._schema;
  }
}

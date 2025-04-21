/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillBillingScheduleGroups } from './SubBillBillingScheduleGroups';
import { SubBillBillingScheduleGroupsRequestBuilder } from './SubBillBillingScheduleGroupsRequestBuilder';
import { SubBillFrequency } from './SubBillFrequency';
import { NoYes } from './NoYes';
import { SubBillUsageReadingOption } from './SubBillUsageReadingOption';
import { SubBillItemType } from './SubBillItemType';
import { SubBillPricingMethod } from './SubBillPricingMethod';
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
export class SubBillBillingScheduleGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillBillingScheduleGroups<DeSerializersT>, DeSerializersT>
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
  ): SubBillBillingScheduleGroupsApi<DeSerializersT> {
    return new SubBillBillingScheduleGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillBillingScheduleGroups;

  requestBuilder(): SubBillBillingScheduleGroupsRequestBuilder<DeSerializersT> {
    return new SubBillBillingScheduleGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SubBillBillingScheduleGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillBillingScheduleGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillBillingScheduleGroups<DeSerializersT>,
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
    typeof SubBillBillingScheduleGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillBillingScheduleGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_SCHEDULE_GROUP: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MILESTONE_TEMPLATE: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINES_TO_ADD_PER_RENEWAL: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BILLING_FREQUENCY: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      SubBillFrequency,
      true,
      true
    >;
    AUTO_RENEW: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USAGE_READING_OPTION: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      SubBillUsageReadingOption,
      true,
      true
    >;
    BILLING_INTERVAL: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_TYPE: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      SubBillItemType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESCALATION: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVOICE_SEPARATELY: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICING_METHOD: EnumField<
      SubBillBillingScheduleGroups<DeSerializers>,
      DeSerializersT,
      SubBillPricingMethod,
      true,
      true
    >;
    ALL_FIELDS: AllFields<SubBillBillingScheduleGroups<DeSerializers>>;
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
         * Static representation of the {@link billingScheduleGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_SCHEDULE_GROUP: fieldBuilder.buildEdmTypeField(
          'BillingScheduleGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link milestoneTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MILESTONE_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'MilestoneTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link linesToAddPerRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINES_TO_ADD_PER_RENEWAL: fieldBuilder.buildEdmTypeField(
          'LinesToAddPerRenewal',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link billingFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_FREQUENCY: fieldBuilder.buildEnumField(
          'BillingFrequency',
          SubBillFrequency,
          true
        ),
        /**
         * Static representation of the {@link autoRenew} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RENEW: fieldBuilder.buildEnumField('AutoRenew', NoYes, true),
        /**
         * Static representation of the {@link usageReadingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USAGE_READING_OPTION: fieldBuilder.buildEnumField(
          'UsageReadingOption',
          SubBillUsageReadingOption,
          true
        ),
        /**
         * Static representation of the {@link billingInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_INTERVAL: fieldBuilder.buildEdmTypeField(
          'BillingInterval',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link itemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE: fieldBuilder.buildEnumField(
          'ItemType',
          SubBillItemType,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link escalation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESCALATION: fieldBuilder.buildEnumField('Escalation', NoYes, true),
        /**
         * Static representation of the {@link invoiceSeparately} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_SEPARATELY: fieldBuilder.buildEnumField(
          'InvoiceSeparately',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link pricingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_METHOD: fieldBuilder.buildEnumField(
          'PricingMethod',
          SubBillPricingMethod,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillBillingScheduleGroups)
      };
    }

    return this._schema;
  }
}

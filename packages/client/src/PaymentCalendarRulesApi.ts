/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymentCalendarRules } from './PaymentCalendarRules';
import { PaymentCalendarRulesRequestBuilder } from './PaymentCalendarRulesRequestBuilder';
import { PaymCalendarModuleType } from './PaymCalendarModuleType';
import { PaymCalendarRuleType } from './PaymCalendarRuleType';
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
export class PaymentCalendarRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymentCalendarRules<DeSerializersT>, DeSerializersT>
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
  ): PaymentCalendarRulesApi<DeSerializersT> {
    return new PaymentCalendarRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymentCalendarRules;

  requestBuilder(): PaymentCalendarRulesRequestBuilder<DeSerializersT> {
    return new PaymentCalendarRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymentCalendarRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymentCalendarRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PaymentCalendarRules<DeSerializersT>,
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
    typeof PaymentCalendarRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymentCalendarRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_TYPE: EnumField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      PaymCalendarModuleType,
      true,
      true
    >;
    PRIORITY: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_DOCUMENT_ADDRESS_PRIORITY: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SPECIFIC_PAYMENT_TERMS: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIFIC_VENDOR_PAYMENT_METHOD: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_PRIMARY_ADDRESS_PRIORITY: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RULE_TYPE: EnumField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      PaymCalendarRuleType,
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SPECIFIC_PAYMENT_CALENDAR_NAME: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIFIC_CUSTOMER_PAYMENT_METHOD: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_DOCUMENT_BANK_ADDRESS_PRIORITY: OrderableEdmTypeField<
      PaymentCalendarRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PaymentCalendarRules<DeSerializers>>;
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
         * Static representation of the {@link moduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_TYPE: fieldBuilder.buildEnumField(
          'ModuleType',
          PaymCalendarModuleType,
          true
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEdmTypeField(
          'Priority',
          'Edm.Int32',
          false
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
         * Static representation of the {@link thirdPartyDocumentAddressPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_DOCUMENT_ADDRESS_PRIORITY: fieldBuilder.buildEdmTypeField(
          'ThirdPartyDocumentAddressPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link specificPaymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'SpecificPaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specificVendorPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_VENDOR_PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'SpecificVendorPaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thirdPartyPrimaryAddressPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_PRIMARY_ADDRESS_PRIORITY: fieldBuilder.buildEdmTypeField(
          'ThirdPartyPrimaryAddressPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ruleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_TYPE: fieldBuilder.buildEnumField(
          'RuleType',
          PaymCalendarRuleType,
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
        /**
         * Static representation of the {@link specificPaymentCalendarName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_PAYMENT_CALENDAR_NAME: fieldBuilder.buildEdmTypeField(
          'SpecificPaymentCalendarName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specificCustomerPaymentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIFIC_CUSTOMER_PAYMENT_METHOD: fieldBuilder.buildEdmTypeField(
          'SpecificCustomerPaymentMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link thirdPartyDocumentBankAddressPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_DOCUMENT_BANK_ADDRESS_PRIORITY:
          fieldBuilder.buildEdmTypeField(
            'ThirdPartyDocumentBankAddressPriority',
            'Edm.Int32',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymentCalendarRules)
      };
    }

    return this._schema;
  }
}

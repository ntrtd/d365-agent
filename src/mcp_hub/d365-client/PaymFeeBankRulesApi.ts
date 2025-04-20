/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PaymFeeBankRules } from './PaymFeeBankRules';
import { PaymFeeBankRulesRequestBuilder } from './PaymFeeBankRulesRequestBuilder';
import { BankReconciliationMatchOperatorType } from './BankReconciliationMatchOperatorType';
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
export class PaymFeeBankRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PaymFeeBankRules<DeSerializersT>, DeSerializersT>
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
  ): PaymFeeBankRulesApi<DeSerializersT> {
    return new PaymFeeBankRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PaymFeeBankRules;

  requestBuilder(): PaymFeeBankRulesRequestBuilder<DeSerializersT> {
    return new PaymFeeBankRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PaymFeeBankRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PaymFeeBankRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PaymFeeBankRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PaymFeeBankRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PaymFeeBankRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_BANK_GROUP: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_PARTY_BANK_GROUP: OrderableEdmTypeField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATION: EnumField<
      PaymFeeBankRules<DeSerializers>,
      DeSerializersT,
      BankReconciliationMatchOperatorType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PaymFeeBankRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.String', false),
        /**
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
        /**
         * Static representation of the {@link companyBankGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_BANK_GROUP: fieldBuilder.buildEdmTypeField(
          'CompanyBankGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link thirdPartyBankGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_PARTY_BANK_GROUP: fieldBuilder.buildEdmTypeField(
          'ThirdPartyBankGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATION: fieldBuilder.buildEnumField(
          'Relation',
          BankReconciliationMatchOperatorType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PaymFeeBankRules)
      };
    }

    return this._schema;
  }
}

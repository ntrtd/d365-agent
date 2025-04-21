/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyLanguageTxts } from './PolicyLanguageTxts';
import { PolicyLanguageTxtsRequestBuilder } from './PolicyLanguageTxtsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PolicyLanguageTxtsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PolicyLanguageTxts<DeSerializersT>, DeSerializersT>
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
  ): PolicyLanguageTxtsApi<DeSerializersT> {
    return new PolicyLanguageTxtsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PolicyLanguageTxts;

  requestBuilder(): PolicyLanguageTxtsRequestBuilder<DeSerializersT> {
    return new PolicyLanguageTxtsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyLanguageTxts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PolicyLanguageTxts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PolicyLanguageTxts<DeSerializersT>,
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
    typeof PolicyLanguageTxts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyLanguageTxts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POLICY_NAME: OrderableEdmTypeField<
      PolicyLanguageTxts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_RULE_TYPE_NAME: OrderableEdmTypeField<
      PolicyLanguageTxts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_RULE_VALID_FROM: OrderableEdmTypeField<
      PolicyLanguageTxts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      PolicyLanguageTxts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      PolicyLanguageTxts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PolicyLanguageTxts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'Policy_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link policyRuleTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'PolicyRuleType_Name',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link policyRuleValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_RULE_VALID_FROM: fieldBuilder.buildEdmTypeField(
          'PolicyRule_ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyLanguageTxts)
      };
    }

    return this._schema;
  }
}

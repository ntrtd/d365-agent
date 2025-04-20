/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailReturnPolicies } from './RetailReturnPolicies';
import { RetailReturnPoliciesRequestBuilder } from './RetailReturnPoliciesRequestBuilder';
import { RetailReturnPolicyLinesApi } from './RetailReturnPolicyLinesApi';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailReturnPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailReturnPolicies<DeSerializersT>, DeSerializersT>
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
  ): RetailReturnPoliciesApi<DeSerializersT> {
    return new RetailReturnPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailReturnPolicyLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_RETURN_POLICY_LINE: OneToManyLink<
      RetailReturnPolicies<DeSerializersT>,
      DeSerializersT,
      RetailReturnPolicyLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailReturnPolicyLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_RETURN_POLICY_LINE: new OneToManyLink(
        'RetailReturnPolicyLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailReturnPolicies;

  requestBuilder(): RetailReturnPoliciesRequestBuilder<DeSerializersT> {
    return new RetailReturnPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailReturnPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailReturnPolicies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailReturnPolicies<DeSerializersT>,
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
    typeof RetailReturnPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailReturnPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailReturnPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NUMBER: OrderableEdmTypeField<
      RetailReturnPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BLOCK_IN_DEFAULT_RETURN_LOCATION: EnumField<
      RetailReturnPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailReturnPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_PRINT_LABELS: EnumField<
      RetailReturnPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailReturnPolicyLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_RETURN_POLICY_LINE: OneToManyLink<
      RetailReturnPolicies<DeSerializersT>,
      DeSerializersT,
      RetailReturnPolicyLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailReturnPolicies<DeSerializers>>;
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
         * Static representation of the {@link policyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PolicyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link blockInDefaultReturnLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_IN_DEFAULT_RETURN_LOCATION: fieldBuilder.buildEnumField(
          'BlockInDefaultReturnLocation',
          NoYes,
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
         * Static representation of the {@link policyPrintLabels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_PRINT_LABELS: fieldBuilder.buildEnumField(
          'PolicyPrintLabels',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailReturnPolicies)
      };
    }

    return this._schema;
  }
}

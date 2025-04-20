/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailReturnPolicyLines } from './RetailReturnPolicyLines';
import { RetailReturnPolicyLinesRequestBuilder } from './RetailReturnPolicyLinesRequestBuilder';
import { RetailReturnPoliciesApi } from './RetailReturnPoliciesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailReturnPolicyLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailReturnPolicyLines<DeSerializersT>, DeSerializersT>
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
  ): RetailReturnPolicyLinesApi<DeSerializersT> {
    return new RetailReturnPolicyLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailReturnPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_RETURN_POLICY: OneToOneLink<
      RetailReturnPolicyLines<DeSerializersT>,
      DeSerializersT,
      RetailReturnPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailReturnPoliciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_RETURN_POLICY: new OneToOneLink(
        'RetailReturnPolicy',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailReturnPolicyLines;

  requestBuilder(): RetailReturnPolicyLinesRequestBuilder<DeSerializersT> {
    return new RetailReturnPolicyLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailReturnPolicyLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailReturnPolicyLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailReturnPolicyLines<DeSerializersT>,
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
    typeof RetailReturnPolicyLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailReturnPolicyLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NUMBER: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BLOCK_ITEM: EnumField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PALLET_ID: OrderableEdmTypeField<
      RetailReturnPolicyLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailReturnPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_RETURN_POLICY: OneToOneLink<
      RetailReturnPolicyLines<DeSerializersT>,
      DeSerializersT,
      RetailReturnPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailReturnPolicyLines<DeSerializers>>;
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
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link blockItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BLOCK_ITEM: fieldBuilder.buildEnumField('BlockItem', NoYes, true),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link palletId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PALLET_ID: fieldBuilder.buildEdmTypeField(
          'PalletId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailReturnPolicyLines)
      };
    }

    return this._schema;
  }
}

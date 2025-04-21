/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipConsolidationPolicyFields } from './ShipConsolidationPolicyFields';
import { ShipConsolidationPolicyFieldsRequestBuilder } from './ShipConsolidationPolicyFieldsRequestBuilder';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';
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
export class ShipConsolidationPolicyFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipConsolidationPolicyFields<DeSerializersT>, DeSerializersT>
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
  ): ShipConsolidationPolicyFieldsApi<DeSerializersT> {
    return new ShipConsolidationPolicyFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipConsolidationPolicyFields;

  requestBuilder(): ShipConsolidationPolicyFieldsRequestBuilder<DeSerializersT> {
    return new ShipConsolidationPolicyFieldsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ShipConsolidationPolicyFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipConsolidationPolicyFields<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipConsolidationPolicyFields<DeSerializersT>,
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
    typeof ShipConsolidationPolicyFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipConsolidationPolicyFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipConsolidationPolicyFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_TYPE: EnumField<
      ShipConsolidationPolicyFields<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyType,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_NAME: OrderableEdmTypeField<
      ShipConsolidationPolicyFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_TABLE_NAME: OrderableEdmTypeField<
      ShipConsolidationPolicyFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_FIELD_NAME: OrderableEdmTypeField<
      ShipConsolidationPolicyFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ShipConsolidationPolicyFields<DeSerializers>>;
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
         * Static representation of the {@link shipConsolidationPolicyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_TYPE: fieldBuilder.buildEnumField(
          'ShipConsolidationPolicyType',
          WhsShipConsolidationPolicyType,
          true
        ),
        /**
         * Static representation of the {@link shipConsolidationPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationPolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'SourceTableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'SourceFieldName',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipConsolidationPolicyFields)
      };
    }

    return this._schema;
  }
}

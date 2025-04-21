/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipConsolidationPoliciesV3 } from './ShipConsolidationPoliciesV3';
import { ShipConsolidationPoliciesV3RequestBuilder } from './ShipConsolidationPoliciesV3RequestBuilder';
import { WhsShipConsolidationPolicyType } from './WhsShipConsolidationPolicyType';
import { NoYes } from './NoYes';
import { WhsShipConsolidationPolicyValidationStatus } from './WhsShipConsolidationPolicyValidationStatus';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ShipConsolidationPoliciesV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipConsolidationPoliciesV3<DeSerializersT>, DeSerializersT>
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
  ): ShipConsolidationPoliciesV3Api<DeSerializersT> {
    return new ShipConsolidationPoliciesV3Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipConsolidationPoliciesV3;

  requestBuilder(): ShipConsolidationPoliciesV3RequestBuilder<DeSerializersT> {
    return new ShipConsolidationPoliciesV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipConsolidationPoliciesV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipConsolidationPoliciesV3<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipConsolidationPoliciesV3<DeSerializersT>,
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
    typeof ShipConsolidationPoliciesV3,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipConsolidationPoliciesV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_TYPE: EnumField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyType,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_NAME: OrderableEdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_SEQ_NUM: OrderableEdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_QUERY_JSON: OrderableEdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSOLIDATE_WITH_EXISTING_SHIPMENTS: EnumField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_DESC: OrderableEdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID: EnumField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyValidationStatus,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_QUERY: EdmTypeField<
      ShipConsolidationPoliciesV3<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipConsolidationPoliciesV3<DeSerializers>>;
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
         * Static representation of the {@link shipConsolidationPolicySeqNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_SEQ_NUM: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationPolicySeqNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link shipConsolidationPolicyQueryJson} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_QUERY_JSON: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationPolicyQueryJson',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consolidateWithExistingShipments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSOLIDATE_WITH_EXISTING_SHIPMENTS: fieldBuilder.buildEnumField(
          'ConsolidateWithExistingShipments',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shipConsolidationPolicyDesc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_DESC: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationPolicyDesc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link valid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID: fieldBuilder.buildEnumField(
          'Valid',
          WhsShipConsolidationPolicyValidationStatus,
          true
        ),
        /**
         * Static representation of the {@link shipConsolidationPolicyQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_CONSOLIDATION_POLICY_QUERY: fieldBuilder.buildEdmTypeField(
          'ShipConsolidationPolicyQuery',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipConsolidationPoliciesV3)
      };
    }

    return this._schema;
  }
}

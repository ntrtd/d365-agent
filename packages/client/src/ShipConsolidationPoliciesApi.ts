/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipConsolidationPolicies } from './ShipConsolidationPolicies';
import { ShipConsolidationPoliciesRequestBuilder } from './ShipConsolidationPoliciesRequestBuilder';
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
export class ShipConsolidationPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipConsolidationPolicies<DeSerializersT>, DeSerializersT>
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
  ): ShipConsolidationPoliciesApi<DeSerializersT> {
    return new ShipConsolidationPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipConsolidationPolicies;

  requestBuilder(): ShipConsolidationPoliciesRequestBuilder<DeSerializersT> {
    return new ShipConsolidationPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipConsolidationPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipConsolidationPolicies<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipConsolidationPolicies<DeSerializersT>,
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
    typeof ShipConsolidationPolicies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipConsolidationPolicies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_TYPE: EnumField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyType,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_NAME: OrderableEdmTypeField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_SEQ_NUM: OrderableEdmTypeField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSOLIDATE_WITH_EXISTING_SHIPMENTS: EnumField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_DESC: OrderableEdmTypeField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID: EnumField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyValidationStatus,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_QUERY: EdmTypeField<
      ShipConsolidationPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipConsolidationPolicies<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', ShipConsolidationPolicies)
      };
    }

    return this._schema;
  }
}

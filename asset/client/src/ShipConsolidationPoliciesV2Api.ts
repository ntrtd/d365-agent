/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipConsolidationPoliciesV2 } from './ShipConsolidationPoliciesV2';
import { ShipConsolidationPoliciesV2RequestBuilder } from './ShipConsolidationPoliciesV2RequestBuilder';
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
export class ShipConsolidationPoliciesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ShipConsolidationPoliciesV2<DeSerializersT>, DeSerializersT>
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
  ): ShipConsolidationPoliciesV2Api<DeSerializersT> {
    return new ShipConsolidationPoliciesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipConsolidationPoliciesV2;

  requestBuilder(): ShipConsolidationPoliciesV2RequestBuilder<DeSerializersT> {
    return new ShipConsolidationPoliciesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipConsolidationPoliciesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ShipConsolidationPoliciesV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShipConsolidationPoliciesV2<DeSerializersT>,
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
    typeof ShipConsolidationPoliciesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipConsolidationPoliciesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_TYPE: EnumField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyType,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_NAME: OrderableEdmTypeField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_SEQ_NUM: OrderableEdmTypeField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CONSOLIDATE_WITH_EXISTING_SHIPMENTS: EnumField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_DESC: OrderableEdmTypeField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID: EnumField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      WhsShipConsolidationPolicyValidationStatus,
      true,
      true
    >;
    SHIP_CONSOLIDATION_POLICY_QUERY: EdmTypeField<
      ShipConsolidationPoliciesV2<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipConsolidationPoliciesV2<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', ShipConsolidationPoliciesV2)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationCostElementDerivationRulePurchasess } from './CostConfigurationCostElementDerivationRulePurchasess';
import { CostConfigurationCostElementDerivationRulePurchasessRequestBuilder } from './CostConfigurationCostElementDerivationRulePurchasessRequestBuilder';
import { CostConfigurationMeasurementType } from './CostConfigurationMeasurementType';
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
export class CostConfigurationCostElementDerivationRulePurchasessApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializersT>,
      DeSerializersT
    >
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
  ): CostConfigurationCostElementDerivationRulePurchasessApi<DeSerializersT> {
    return new CostConfigurationCostElementDerivationRulePurchasessApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostConfigurationCostElementDerivationRulePurchasess;

  requestBuilder(): CostConfigurationCostElementDerivationRulePurchasessRequestBuilder<DeSerializersT> {
    return new CostConfigurationCostElementDerivationRulePurchasessRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationCostElementDerivationRulePurchasess<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationCostElementDerivationRulePurchasess<DeSerializersT>,
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
    typeof CostConfigurationCostElementDerivationRulePurchasess,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationCostElementDerivationRulePurchasess,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_ELEMENT_DERIVATION_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEASUREMENT: EnumField<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>,
      DeSerializersT,
      CostConfigurationMeasurementType,
      true,
      true
    >;
    RESOURCE_TYPE: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_NAME: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_INVENTORY_COST: EnumField<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostConfigurationCostElementDerivationRulePurchasess<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link costElementDerivationPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_DERIVATION_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'CostElementDerivationPolicyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link measurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASUREMENT: fieldBuilder.buildEnumField(
          'Measurement',
          CostConfigurationMeasurementType,
          true
        ),
        /**
         * Static representation of the {@link resourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_TYPE: fieldBuilder.buildEdmTypeField(
          'ResourceType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costElementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ELEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'CostElementName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impactInventoryCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_INVENTORY_COST: fieldBuilder.buildEnumField(
          'ImpactInventoryCost',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostConfigurationCostElementDerivationRulePurchasess
        )
      };
    }

    return this._schema;
  }
}

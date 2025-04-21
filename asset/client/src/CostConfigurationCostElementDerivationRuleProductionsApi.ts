/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostConfigurationCostElementDerivationRuleProductions } from './CostConfigurationCostElementDerivationRuleProductions';
import { CostConfigurationCostElementDerivationRuleProductionsRequestBuilder } from './CostConfigurationCostElementDerivationRuleProductionsRequestBuilder';
import { CostConfigurationMeasurementTypeProduction } from './CostConfigurationMeasurementTypeProduction';
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
export class CostConfigurationCostElementDerivationRuleProductionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializersT>,
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
  ): CostConfigurationCostElementDerivationRuleProductionsApi<DeSerializersT> {
    return new CostConfigurationCostElementDerivationRuleProductionsApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CostConfigurationCostElementDerivationRuleProductions;

  requestBuilder(): CostConfigurationCostElementDerivationRuleProductionsRequestBuilder<DeSerializersT> {
    return new CostConfigurationCostElementDerivationRuleProductionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CostConfigurationCostElementDerivationRuleProductions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CostConfigurationCostElementDerivationRuleProductions<DeSerializersT>,
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
    typeof CostConfigurationCostElementDerivationRuleProductions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostConfigurationCostElementDerivationRuleProductions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_ELEMENT_DERIVATION_POLICY_NAME: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEASUREMENT: EnumField<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializers>,
      DeSerializersT,
      CostConfigurationMeasurementTypeProduction,
      true,
      true
    >;
    RESOURCE_TYPE_NAME: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_ELEMENT_NAME: OrderableEdmTypeField<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      CostConfigurationCostElementDerivationRuleProductions<DeSerializers>
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
          CostConfigurationMeasurementTypeProduction,
          true
        ),
        /**
         * Static representation of the {@link resourceTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceTypeName',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          CostConfigurationCostElementDerivationRuleProductions
        )
      };
    }

    return this._schema;
  }
}

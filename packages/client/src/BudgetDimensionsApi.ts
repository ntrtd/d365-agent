/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetDimensions } from './BudgetDimensions';
import { BudgetDimensionsRequestBuilder } from './BudgetDimensionsRequestBuilder';
import { LedgersApi } from './LedgersApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import { BudgetAllowTransferRulesApi } from './BudgetAllowTransferRulesApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BudgetDimensionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BudgetDimensions<DeSerializersT>, DeSerializersT>
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
  ): BudgetDimensionsApi<DeSerializersT> {
    return new BudgetDimensionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link budgetDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DIMENSIONS: OneToOneLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetPrimaryLedgers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PRIMARY_LEDGERS: OneToOneLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleBudgetDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_BUDGET_DIMENSION: OneToManyLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LedgersApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      BudgetAllowTransferRulesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUDGET_DIMENSIONS: new OneToOneLink(
        'BudgetDimensions',
        this,
        linkedApis[0]
      ),
      BUDGET_PRIMARY_LEDGERS: new OneToOneLink(
        'BudgetPrimaryLedgers',
        this,
        linkedApis[1]
      ),
      BUDGET_ALLOW_TRANSFER_RULE_BUDGET_DIMENSION: new OneToManyLink(
        'BudgetAllowTransferRuleBudgetDimension',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = BudgetDimensions;

  requestBuilder(): BudgetDimensionsRequestBuilder<DeSerializersT> {
    return new BudgetDimensionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BudgetDimensions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BudgetDimensions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BudgetDimensions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BudgetDimensions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BudgetDimensions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BudgetDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BudgetDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_ID: OrderableEdmTypeField<
      BudgetDimensions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetDimensions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_DIMENSIONS: OneToOneLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      LedgersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link budgetPrimaryLedgers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_PRIMARY_LEDGERS: OneToOneLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link budgetAllowTransferRuleBudgetDimension} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUDGET_ALLOW_TRANSFER_RULE_BUDGET_DIMENSION: OneToManyLink<
      BudgetDimensions<DeSerializersT>,
      DeSerializersT,
      BudgetAllowTransferRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BudgetDimensions<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BudgetDimensions)
      };
    }

    return this._schema;
  }
}

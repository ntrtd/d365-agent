/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReleaseKindTables } from './ReleaseKindTables';
import { ReleaseKindTablesRequestBuilder } from './ReleaseKindTablesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { NoYes } from './NoYes';
import { ProdReleaseCalcPrincipleRu } from './ProdReleaseCalcPrincipleRu';
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
export class ReleaseKindTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReleaseKindTables<DeSerializersT>, DeSerializersT>
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
  ): ReleaseKindTablesApi<DeSerializersT> {
    return new ReleaseKindTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ReleaseKindTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ReleaseKindTables;

  requestBuilder(): ReleaseKindTablesRequestBuilder<DeSerializersT> {
    return new ReleaseKindTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReleaseKindTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReleaseKindTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReleaseKindTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ReleaseKindTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReleaseKindTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RELEASE_KIND_ID: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFECTIVE_PRODUCT: EnumField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COSTING_RULE: EnumField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      ProdReleaseCalcPrincipleRu,
      true,
      true
    >;
    SCRAP: EnumField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOSS_PHYS_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOSS_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      ReleaseKindTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ReleaseKindTables<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ReleaseKindTables<DeSerializers>>;
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
         * Static representation of the {@link releaseKindId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_KIND_ID: fieldBuilder.buildEdmTypeField(
          'ReleaseKindId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defectiveProduct} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFECTIVE_PRODUCT: fieldBuilder.buildEnumField(
          'DefectiveProduct',
          NoYes,
          true
        ),
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
         * Static representation of the {@link costingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_RULE: fieldBuilder.buildEnumField(
          'CostingRule',
          ProdReleaseCalcPrincipleRu,
          true
        ),
        /**
         * Static representation of the {@link scrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP: fieldBuilder.buildEnumField('Scrap', NoYes, true),
        /**
         * Static representation of the {@link lossPhysLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_PHYS_LEDGER_DIMENSION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'LossPhysLedgerDimensionDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link lossAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOSS_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LossAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReleaseKindTables)
      };
    }

    return this._schema;
  }
}

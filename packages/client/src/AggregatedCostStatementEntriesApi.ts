/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AggregatedCostStatementEntries } from './AggregatedCostStatementEntries';
import { AggregatedCostStatementEntriesRequestBuilder } from './AggregatedCostStatementEntriesRequestBuilder';
import { OperationalSitesApi } from './OperationalSitesApi';
import { CostStatementType } from './CostStatementType';
import { CostStatementLineCategoryLevel1 } from './CostStatementLineCategoryLevel1';
import { CostStatementLineCategoryLevel2 } from './CostStatementLineCategoryLevel2';
import { CostStatementLineCategoryLevel3 } from './CostStatementLineCategoryLevel3';
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
export class AggregatedCostStatementEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AggregatedCostStatementEntries<DeSerializersT>, DeSerializersT>
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
  ): AggregatedCostStatementEntriesApi<DeSerializersT> {
    return new AggregatedCostStatementEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      AggregatedCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OperationalSitesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      OPERATIONAL_SITE: new OneToOneLink('OperationalSite', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AggregatedCostStatementEntries;

  requestBuilder(): AggregatedCostStatementEntriesRequestBuilder<DeSerializersT> {
    return new AggregatedCostStatementEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AggregatedCostStatementEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AggregatedCostStatementEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AggregatedCostStatementEntries<DeSerializersT>,
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
    typeof AggregatedCostStatementEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AggregatedCostStatementEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_STATEMENT_TYPE: EnumField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementType,
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEVEL_ONE_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel1,
      true,
      true
    >;
    LEVEL_TWO_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel2,
      true,
      true
    >;
    LEVEL_THREE_COST_STATEMENT_LINE_CATEGORY_NAME: EnumField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      CostStatementLineCategoryLevel3,
      true,
      true
    >;
    OPERATIONAL_SITE_ID: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_RESOURCE_GROUP_ID: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      AggregatedCostStatementEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationalSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONAL_SITE: OneToOneLink<
      AggregatedCostStatementEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AggregatedCostStatementEntries<DeSerializers>>;
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
         * Static representation of the {@link costStatementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_STATEMENT_TYPE: fieldBuilder.buildEnumField(
          'CostStatementType',
          CostStatementType,
          true
        ),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link levelOneCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ONE_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelOneCostStatementLineCategoryName',
            CostStatementLineCategoryLevel1,
            true
          ),
        /**
         * Static representation of the {@link levelTwoCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_TWO_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelTwoCostStatementLineCategoryName',
            CostStatementLineCategoryLevel2,
            true
          ),
        /**
         * Static representation of the {@link levelThreeCostStatementLineCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_THREE_COST_STATEMENT_LINE_CATEGORY_NAME:
          fieldBuilder.buildEnumField(
            'LevelThreeCostStatementLineCategoryName',
            CostStatementLineCategoryLevel3,
            true
          ),
        /**
         * Static representation of the {@link operationalSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONAL_SITE_ID: fieldBuilder.buildEdmTypeField(
          'OperationalSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costResourceGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_RESOURCE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CostResourceGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AggregatedCostStatementEntries)
      };
    }

    return this._schema;
  }
}

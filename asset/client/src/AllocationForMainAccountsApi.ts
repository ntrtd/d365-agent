/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllocationForMainAccounts } from './AllocationForMainAccounts';
import { AllocationForMainAccountsRequestBuilder } from './AllocationForMainAccountsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AllocationForMainAccountsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AllocationForMainAccounts<DeSerializersT>, DeSerializersT>
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
  ): AllocationForMainAccountsApi<DeSerializersT> {
    return new AllocationForMainAccountsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationForMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationForMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AllocationForMainAccounts;

  requestBuilder(): AllocationForMainAccountsRequestBuilder<DeSerializersT> {
    return new AllocationForMainAccountsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AllocationForMainAccounts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AllocationForMainAccounts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AllocationForMainAccounts<DeSerializersT>,
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
    typeof AllocationForMainAccounts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AllocationForMainAccounts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_SELECTION_CRITERIA_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_KEEP_SOURCE_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SELECTION_CRITERIA_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_PERCENTAGE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESTINATION_DIMENSIONS_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      AllocationForMainAccounts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      AllocationForMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      AllocationForMainAccounts<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AllocationForMainAccounts<DeSerializers>>;
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
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
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
         * Static representation of the {@link sourceSelectionCriteriaDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SELECTION_CRITERIA_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SourceSelectionCriteriaDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationKeepSourceDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_KEEP_SOURCE_DIMENSIONS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DestinationKeepSourceDimensionsDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link sourceSelectionCriteriaDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SELECTION_CRITERIA_DIMENSIONS_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'SourceSelectionCriteriaDimensionsDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link allocationPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AllocationPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link destinationDimensionsDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_DIMENSIONS_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DestinationDimensionsDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DestinationAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AllocationForMainAccounts)
      };
    }

    return this._schema;
  }
}

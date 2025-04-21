/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RDeferralsBooks } from './RDeferralsBooks';
import { RDeferralsBooksRequestBuilder } from './RDeferralsBooksRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { DimensionSetsApi } from './DimensionSetsApi';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RDeferralsBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RDeferralsBooks<DeSerializersT>, DeSerializersT>
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
  ): RDeferralsBooksApi<DeSerializersT> {
    return new RDeferralsBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RDeferralsBooks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RDeferralsBooks<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RDeferralsBooks;

  requestBuilder(): RDeferralsBooksRequestBuilder<DeSerializersT> {
    return new RDeferralsBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RDeferralsBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RDeferralsBooks<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RDeferralsBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RDeferralsBooks, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RDeferralsBooks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFERRALS_ID: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_NUMBER: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WRITING_OFF_TIME: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    END_DATE_OF_WRITING_OFF: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WRITING_OFF_METHOD: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCK: EnumField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFERRALS_GROUP: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BEGINNING_DATE_OF_WRITING_OFF: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEFERRALS_SUM: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPOSAL_DATE: OrderableEdmTypeField<
      RDeferralsBooks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      RDeferralsBooks<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      RDeferralsBooks<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RDeferralsBooks<DeSerializers>>;
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
         * Static representation of the {@link deferralsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRALS_ID: fieldBuilder.buildEdmTypeField(
          'DeferralsId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ModelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link writingOffTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_TIME: fieldBuilder.buildEdmTypeField(
          'WritingOffTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link endDateOfWritingOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_OF_WRITING_OFF: fieldBuilder.buildEdmTypeField(
          'EndDateOfWritingOff',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link writingOffMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WRITING_OFF_METHOD: fieldBuilder.buildEdmTypeField(
          'WritingOffMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCK: fieldBuilder.buildEnumField('Lock', NoYes, true),
        /**
         * Static representation of the {@link deferralsGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRALS_GROUP: fieldBuilder.buildEdmTypeField(
          'DeferralsGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link beginningDateOfWritingOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BEGINNING_DATE_OF_WRITING_OFF: fieldBuilder.buildEdmTypeField(
          'BeginningDateOfWritingOff',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deferralsSum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFERRALS_SUM: fieldBuilder.buildEdmTypeField(
          'DeferralsSum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link disposalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPOSAL_DATE: fieldBuilder.buildEdmTypeField(
          'DisposalDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RDeferralsBooks)
      };
    }

    return this._schema;
  }
}

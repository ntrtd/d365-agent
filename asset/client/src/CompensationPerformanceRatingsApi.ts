/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationPerformanceRatings } from './CompensationPerformanceRatings';
import { CompensationPerformanceRatingsRequestBuilder } from './CompensationPerformanceRatingsRequestBuilder';
import { CompensationPayPerformanceAllocationLinesApi } from './CompensationPayPerformanceAllocationLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationPerformanceRatingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationPerformanceRatings<DeSerializersT>, DeSerializersT>
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
  ): CompensationPerformanceRatingsApi<DeSerializersT> {
    return new CompensationPerformanceRatingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: OneToManyLink<
      CompensationPerformanceRatings<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompensationPayPerformanceAllocationLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: new OneToManyLink(
        'CompensationPayPerformanceAllocationLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = CompensationPerformanceRatings;

  requestBuilder(): CompensationPerformanceRatingsRequestBuilder<DeSerializersT> {
    return new CompensationPerformanceRatingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationPerformanceRatings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationPerformanceRatings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationPerformanceRatings<DeSerializersT>,
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
    typeof CompensationPerformanceRatings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationPerformanceRatings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationPerformanceRatings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATING: OrderableEdmTypeField<
      CompensationPerformanceRatings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION: OrderableEdmTypeField<
      CompensationPerformanceRatings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationPerformanceRatings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE: OrderableEdmTypeField<
      CompensationPerformanceRatings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationPayPerformanceAllocationLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_PAY_PERFORMANCE_ALLOCATION_LINE: OneToManyLink<
      CompensationPerformanceRatings<DeSerializersT>,
      DeSerializersT,
      CompensationPayPerformanceAllocationLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationPerformanceRatings<DeSerializers>>;
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
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('Rating', 'Edm.String', false),
        /**
         * Static representation of the {@link expiration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION: fieldBuilder.buildEdmTypeField(
          'Expiration',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE: fieldBuilder.buildEdmTypeField(
          'Effective',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationPerformanceRatings)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25StdRateTranses } from './RTax25StdRateTranses';
import { RTax25StdRateTransesRequestBuilder } from './RTax25StdRateTransesRequestBuilder';
import { RateCriterionTypeRu } from './RateCriterionTypeRu';
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
export class RTax25StdRateTransesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25StdRateTranses<DeSerializersT>, DeSerializersT>
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
  ): RTax25StdRateTransesApi<DeSerializersT> {
    return new RTax25StdRateTransesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RTax25StdRateTranses;

  requestBuilder(): RTax25StdRateTransesRequestBuilder<DeSerializersT> {
    return new RTax25StdRateTransesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25StdRateTranses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RTax25StdRateTranses<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RTax25StdRateTranses<DeSerializersT>,
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
    typeof RTax25StdRateTranses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25StdRateTranses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_ID: OrderableEdmTypeField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CRITERION_TYPE: EnumField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      RateCriterionTypeRu,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RATE_CODE: OrderableEdmTypeField<
      RTax25StdRateTranses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RTax25StdRateTranses<DeSerializers>>;
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
         * Static representation of the {@link lineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ID: fieldBuilder.buildEdmTypeField('LineId', 'Edm.Guid', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link criterionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITERION_TYPE: fieldBuilder.buildEnumField(
          'CriterionType',
          RateCriterionTypeRu,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link rateCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_CODE: fieldBuilder.buildEdmTypeField(
          'RateCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25StdRateTranses)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RTax25StdRateCritTranses } from './RTax25StdRateCritTranses';
import { RTax25StdRateCritTransesRequestBuilder } from './RTax25StdRateCritTransesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RTax25StdRateCritTransesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RTax25StdRateCritTranses<DeSerializersT>, DeSerializersT>
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
  ): RTax25StdRateCritTransesApi<DeSerializersT> {
    return new RTax25StdRateCritTransesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RTax25StdRateCritTranses;

  requestBuilder(): RTax25StdRateCritTransesRequestBuilder<DeSerializersT> {
    return new RTax25StdRateCritTransesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RTax25StdRateCritTranses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RTax25StdRateCritTranses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RTax25StdRateCritTranses<DeSerializersT>,
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
    typeof RTax25StdRateCritTranses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RTax25StdRateCritTranses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RTax25StdRateCritTranses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATE_TRANS_LINE_ID: OrderableEdmTypeField<
      RTax25StdRateCritTranses<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    FOR_AMOUNT: OrderableEdmTypeField<
      RTax25StdRateCritTranses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      RTax25StdRateCritTranses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RTax25StdRateCritTranses<DeSerializers>>;
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
         * Static representation of the {@link rateTransLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE_TRANS_LINE_ID: fieldBuilder.buildEdmTypeField(
          'RateTransLineId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link forAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOR_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ForAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RTax25StdRateCritTranses)
      };
    }

    return this._schema;
  }
}

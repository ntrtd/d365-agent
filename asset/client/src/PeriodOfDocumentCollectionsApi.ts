/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeriodOfDocumentCollections } from './PeriodOfDocumentCollections';
import { PeriodOfDocumentCollectionsRequestBuilder } from './PeriodOfDocumentCollectionsRequestBuilder';
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
export class PeriodOfDocumentCollectionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PeriodOfDocumentCollections<DeSerializersT>, DeSerializersT>
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
  ): PeriodOfDocumentCollectionsApi<DeSerializersT> {
    return new PeriodOfDocumentCollectionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PeriodOfDocumentCollections;

  requestBuilder(): PeriodOfDocumentCollectionsRequestBuilder<DeSerializersT> {
    return new PeriodOfDocumentCollectionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PeriodOfDocumentCollections<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PeriodOfDocumentCollections<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PeriodOfDocumentCollections<DeSerializersT>,
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
    typeof PeriodOfDocumentCollections,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PeriodOfDocumentCollections,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PeriodOfDocumentCollections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      PeriodOfDocumentCollections<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPORT_CONFIRMATION_PERIOD: OrderableEdmTypeField<
      PeriodOfDocumentCollections<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PeriodOfDocumentCollections<DeSerializers>>;
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exportConfirmationPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_CONFIRMATION_PERIOD: fieldBuilder.buildEdmTypeField(
          'ExportConfirmationPeriod',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PeriodOfDocumentCollections)
      };
    }

    return this._schema;
  }
}

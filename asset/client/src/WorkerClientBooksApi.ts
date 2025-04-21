/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerClientBooks } from './WorkerClientBooks';
import { WorkerClientBooksRequestBuilder } from './WorkerClientBooksRequestBuilder';
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
export class WorkerClientBooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerClientBooks<DeSerializersT>, DeSerializersT>
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
  ): WorkerClientBooksApi<DeSerializersT> {
    return new WorkerClientBooksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WorkerClientBooks;

  requestBuilder(): WorkerClientBooksRequestBuilder<DeSerializersT> {
    return new WorkerClientBooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerClientBooks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerClientBooks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerClientBooks<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WorkerClientBooks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerClientBooks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WorkerClientBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLIENT_BOOK_ID: OrderableEdmTypeField<
      WorkerClientBooks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLIENT_BOOK_WORKER: OrderableEdmTypeField<
      WorkerClientBooks<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WorkerClientBooks<DeSerializers>>;
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
         * Static representation of the {@link clientBookId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_BOOK_ID: fieldBuilder.buildEdmTypeField(
          'ClientBookId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link clientBookWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_BOOK_WORKER: fieldBuilder.buildEdmTypeField(
          'ClientBookWorker',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerClientBooks)
      };
    }

    return this._schema;
  }
}

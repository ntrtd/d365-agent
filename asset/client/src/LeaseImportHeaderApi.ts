/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeaseImportHeader } from './LeaseImportHeader';
import { LeaseImportHeaderRequestBuilder } from './LeaseImportHeaderRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LeaseImportHeaderApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeaseImportHeader<DeSerializersT>, DeSerializersT>
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
  ): LeaseImportHeaderApi<DeSerializersT> {
    return new LeaseImportHeaderApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeaseImportHeader;

  requestBuilder(): LeaseImportHeaderRequestBuilder<DeSerializersT> {
    return new LeaseImportHeaderRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeaseImportHeader<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeaseImportHeader<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeaseImportHeader<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LeaseImportHeader,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeaseImportHeader,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_ID: OrderableEdmTypeField<
      LeaseImportHeader<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    IMPORT_ID: OrderableEdmTypeField<
      LeaseImportHeader<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_IMPORT: EnumField<
      LeaseImportHeader<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LeaseImportHeader<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link importId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'ImportId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_IMPORT: fieldBuilder.buildEnumField('EntityImport', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeaseImportHeader)
      };
    }

    return this._schema;
  }
}

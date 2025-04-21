/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentRoutingPrinters } from './DocumentRoutingPrinters';
import { DocumentRoutingPrintersRequestBuilder } from './DocumentRoutingPrintersRequestBuilder';
import { NoYesCombo } from './NoYesCombo';
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
export class DocumentRoutingPrintersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentRoutingPrinters<DeSerializersT>, DeSerializersT>
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
  ): DocumentRoutingPrintersApi<DeSerializersT> {
    return new DocumentRoutingPrintersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DocumentRoutingPrinters;

  requestBuilder(): DocumentRoutingPrintersRequestBuilder<DeSerializersT> {
    return new DocumentRoutingPrintersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentRoutingPrinters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentRoutingPrinters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentRoutingPrinters<DeSerializersT>,
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
    typeof DocumentRoutingPrinters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentRoutingPrinters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLIENT_APPLICATION_ID: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINTER_PATH: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINTER_NAME: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_DESCRIPTION: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINTER_IS_ACTIVE: EnumField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      NoYesCombo,
      true,
      true
    >;
    PRINTER_ID: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PRINTER_COMPANY_ID: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLIENT_APPLICATION_DESCRIPTION: OrderableEdmTypeField<
      DocumentRoutingPrinters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DocumentRoutingPrinters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link clientApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'ClientApplicationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link printerPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_PATH: fieldBuilder.buildEdmTypeField(
          'PrinterPath',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link printerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_NAME: fieldBuilder.buildEdmTypeField(
          'PrinterName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PrinterDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printerIsActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_IS_ACTIVE: fieldBuilder.buildEnumField(
          'PrinterIsActive',
          NoYesCombo,
          true
        ),
        /**
         * Static representation of the {@link printerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_ID: fieldBuilder.buildEdmTypeField(
          'PrinterId',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link printerCompanyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINTER_COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'PrinterCompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clientApplicationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_APPLICATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ClientApplicationDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentRoutingPrinters)
      };
    }

    return this._schema;
  }
}

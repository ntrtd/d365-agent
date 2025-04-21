/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalDocumentTypes } from './FiscalDocumentTypes';
import { FiscalDocumentTypesRequestBuilder } from './FiscalDocumentTypesRequestBuilder';
import { NoYes } from './NoYes';
import { FiscalDocumentSpecieBr } from './FiscalDocumentSpecieBr';
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
export class FiscalDocumentTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FiscalDocumentTypes<DeSerializersT>, DeSerializersT>
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
  ): FiscalDocumentTypesApi<DeSerializersT> {
    return new FiscalDocumentTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalDocumentTypes;

  requestBuilder(): FiscalDocumentTypesRequestBuilder<DeSerializersT> {
    return new FiscalDocumentTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalDocumentTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FiscalDocumentTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalDocumentTypes<DeSerializersT>,
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
    typeof FiscalDocumentTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalDocumentTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TYPE: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAX_ITEM_LINES: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAX_INSTALLMENTS: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MAX_SERVICE_ITEM_DESCRIPTION: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ELECTRONIC_FISCAL_DOCUMENT_FOR_SERVICES: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_MEMO_DESCRIPTION_SIZE: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FISCAL_DOCUMENT_ISSUE_DATE: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_MEMO_LINES: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CUT_OFF_ITEM_DESCRIPTION: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ER_EXPORT_FORMAT_VENDOR_URL: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETURN_FILE_LAYOUT_GROUP: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUT_OFF_SERVICE_ITEM_DESCRIPTION: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ER_EXPORT_FORMAT_SOLUTION_NAME: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_MODEL: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SPECIE: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      FiscalDocumentSpecieBr,
      true,
      true
    >;
    EXPORT_FILE_LAYOUT_GROUP: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUTOFF_MEMO_DESCRIPTION: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_ITEM_DESCRIPTION_SIZE: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ER_EXPORT_FORMAT_MAPPING_NAME: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_NUMBER_SEQUENCE: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_SERVICE_ITEM_LINES: OrderableEdmTypeField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_DELIVERY_ADDRESS_AT_MEMO: EnumField<
      FiscalDocumentTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalDocumentTypes<DeSerializers>>;
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
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maxItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'MaxItemLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maxInstallments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_INSTALLMENTS: fieldBuilder.buildEdmTypeField(
          'MaxInstallments',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link maxServiceItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SERVICE_ITEM_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MaxServiceItemDescription',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link electronicFiscalDocumentForServices} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_FISCAL_DOCUMENT_FOR_SERVICES: fieldBuilder.buildEnumField(
          'ElectronicFiscalDocumentForServices',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxMemoDescriptionSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MEMO_DESCRIPTION_SIZE: fieldBuilder.buildEdmTypeField(
          'MaxMemoDescriptionSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentIssueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentIssueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link maxMemoLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_MEMO_LINES: fieldBuilder.buildEdmTypeField(
          'MaxMemoLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link cutOffItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUT_OFF_ITEM_DESCRIPTION: fieldBuilder.buildEnumField(
          'CutOffItemDescription',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link erExportFormatVendorUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_EXPORT_FORMAT_VENDOR_URL: fieldBuilder.buildEdmTypeField(
          'ERExportFormatVendorUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link returnFileLayoutGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_FILE_LAYOUT_GROUP: fieldBuilder.buildEdmTypeField(
          'ReturnFileLayoutGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cutOffServiceItemDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUT_OFF_SERVICE_ITEM_DESCRIPTION: fieldBuilder.buildEnumField(
          'CutOffServiceItemDescription',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link erExportFormatSolutionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_EXPORT_FORMAT_SOLUTION_NAME: fieldBuilder.buildEdmTypeField(
          'ERExportFormatSolutionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_MODEL: fieldBuilder.buildEdmTypeField(
          'DocumentModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link specie} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIE: fieldBuilder.buildEnumField(
          'Specie',
          FiscalDocumentSpecieBr,
          true
        ),
        /**
         * Static representation of the {@link exportFileLayoutGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORT_FILE_LAYOUT_GROUP: fieldBuilder.buildEdmTypeField(
          'ExportFileLayoutGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link series} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES: fieldBuilder.buildEdmTypeField('Series', 'Edm.String', true),
        /**
         * Static representation of the {@link cutoffMemoDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUTOFF_MEMO_DESCRIPTION: fieldBuilder.buildEnumField(
          'CutoffMemoDescription',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxItemDescriptionSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ITEM_DESCRIPTION_SIZE: fieldBuilder.buildEdmTypeField(
          'MaxItemDescriptionSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link erExportFormatMappingName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_EXPORT_FORMAT_MAPPING_NAME: fieldBuilder.buildEdmTypeField(
          'ERExportFormatMappingName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentNumberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentNumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxServiceItemLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_SERVICE_ITEM_LINES: fieldBuilder.buildEdmTypeField(
          'MaxServiceItemLines',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printDeliveryAddressAtMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DELIVERY_ADDRESS_AT_MEMO: fieldBuilder.buildEnumField(
          'PrintDeliveryAddressAtMemo',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalDocumentTypes)
      };
    }

    return this._schema;
  }
}

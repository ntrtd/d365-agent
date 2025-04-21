/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalDocSourceTextReferenceProcesses } from './FiscalDocSourceTextReferenceProcesses';
import { FiscalDocSourceTextReferenceProcessesRequestBuilder } from './FiscalDocSourceTextReferenceProcessesRequestBuilder';
import { FiscalDocumentSourceTextsApi } from './FiscalDocumentSourceTextsApi';
import { AgencyBr } from './AgencyBr';
import { ConcessionaryActTypeBr } from './ConcessionaryActTypeBr';
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
export class FiscalDocSourceTextReferenceProcessesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
      DeSerializersT
    >
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
  ): FiscalDocSourceTextReferenceProcessesApi<DeSerializersT> {
    return new FiscalDocSourceTextReferenceProcessesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fiscalDocumentSourceText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_DOCUMENT_SOURCE_TEXT: OneToOneLink<
      FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
      DeSerializersT,
      FiscalDocumentSourceTextsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FiscalDocumentSourceTextsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_DOCUMENT_SOURCE_TEXT: new OneToOneLink(
        'FiscalDocumentSourceText',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FiscalDocSourceTextReferenceProcesses;

  requestBuilder(): FiscalDocSourceTextReferenceProcessesRequestBuilder<DeSerializersT> {
    return new FiscalDocSourceTextReferenceProcessesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
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
    typeof FiscalDocSourceTextReferenceProcesses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalDocSourceTextReferenceProcesses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalDocSourceTextReferenceProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      FiscalDocSourceTextReferenceProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGENCY: EnumField<
      FiscalDocSourceTextReferenceProcesses<DeSerializers>,
      DeSerializersT,
      AgencyBr,
      true,
      true
    >;
    REFERENCE_PROCESS_NUMBER: OrderableEdmTypeField<
      FiscalDocSourceTextReferenceProcesses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONCESSIONARY_ACT_TYPE: EnumField<
      FiscalDocSourceTextReferenceProcesses<DeSerializers>,
      DeSerializersT,
      ConcessionaryActTypeBr,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalDocumentSourceText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_DOCUMENT_SOURCE_TEXT: OneToOneLink<
      FiscalDocSourceTextReferenceProcesses<DeSerializersT>,
      DeSerializersT,
      FiscalDocumentSourceTextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalDocSourceTextReferenceProcesses<DeSerializers>>;
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
         * Static representation of the {@link fiscalDocumentText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentText',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGENCY: fieldBuilder.buildEnumField('Agency', AgencyBr, true),
        /**
         * Static representation of the {@link referenceProcessNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_PROCESS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceProcessNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link concessionaryActType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCESSIONARY_ACT_TYPE: fieldBuilder.buildEnumField(
          'ConcessionaryActType',
          ConcessionaryActTypeBr,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalDocSourceTextReferenceProcesses)
      };
    }

    return this._schema;
  }
}

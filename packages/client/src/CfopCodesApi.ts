/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CfopCodes } from './CfopCodes';
import { CfopCodesRequestBuilder } from './CfopCodesRequestBuilder';
import { NoYes } from './NoYes';
import { CfopPurposeBr } from './CfopPurposeBr';
import { FiscalDocDirectionBr } from './FiscalDocDirectionBr';
import { CustVendLocationBr } from './CustVendLocationBr';
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
export class CfopCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CfopCodes<DeSerializersT>, DeSerializersT>
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
  ): CfopCodesApi<DeSerializersT> {
    return new CfopCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CfopCodes;

  requestBuilder(): CfopCodesRequestBuilder<DeSerializersT> {
    return new CfopCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CfopCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CfopCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CfopCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CfopCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CfopCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CFOP: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_REFERENCE_LEGAL_TEXT: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_REFERENCE_REQUIRED: EnumField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SEARCH_NAME: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_SOURCE_TEXT: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FISCAL_DOCUMENT_TEXT: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: EnumField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      CfopPurposeBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_CFOP: OrderableEdmTypeField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIRECTION: EnumField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      FiscalDocDirectionBr,
      true,
      true
    >;
    LOCATION: EnumField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      CustVendLocationBr,
      true,
      true
    >;
    CONSIDER_IN_CIAP: EnumField<
      CfopCodes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CfopCodes<DeSerializers>>;
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
         * Static representation of the {@link cfop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFOP: fieldBuilder.buildEdmTypeField('CFOP', 'Edm.String', false),
        /**
         * Static representation of the {@link fiscalReferenceLegalText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REFERENCE_LEGAL_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalReferenceLegalText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalReferenceRequired} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_REFERENCE_REQUIRED: fieldBuilder.buildEnumField(
          'FiscalReferenceRequired',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link searchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'SearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentSourceText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_SOURCE_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentSourceText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fiscalDocumentText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TEXT: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEnumField('Purpose', CfopPurposeBr, true),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryCfop} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CFOP: fieldBuilder.buildEdmTypeField(
          'DeliveryCFOP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link direction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECTION: fieldBuilder.buildEnumField(
          'Direction',
          FiscalDocDirectionBr,
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEnumField(
          'Location',
          CustVendLocationBr,
          true
        ),
        /**
         * Static representation of the {@link considerInCiap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIDER_IN_CIAP: fieldBuilder.buildEnumField(
          'ConsiderInCIAP',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CfopCodes)
      };
    }

    return this._schema;
  }
}

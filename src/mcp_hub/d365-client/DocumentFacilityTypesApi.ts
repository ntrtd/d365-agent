/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentFacilityTypes } from './DocumentFacilityTypes';
import { DocumentFacilityTypesRequestBuilder } from './DocumentFacilityTypesRequestBuilder';
import { DocumentFacilityGroupsApi } from './DocumentFacilityGroupsApi';
import { BankDocumentType } from './BankDocumentType';
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
export class DocumentFacilityTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentFacilityTypes<DeSerializersT>, DeSerializersT>
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
  ): DocumentFacilityTypesApi<DeSerializersT> {
    return new DocumentFacilityTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link documentFacilityGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_FACILITY_GROUP: OneToOneLink<
      DocumentFacilityTypes<DeSerializersT>,
      DeSerializersT,
      DocumentFacilityGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DocumentFacilityGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DOCUMENT_FACILITY_GROUP: new OneToOneLink(
        'DocumentFacilityGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DocumentFacilityTypes;

  requestBuilder(): DocumentFacilityTypesRequestBuilder<DeSerializersT> {
    return new DocumentFacilityTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentFacilityTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DocumentFacilityTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentFacilityTypes<DeSerializersT>,
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
    typeof DocumentFacilityTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentFacilityTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      DocumentFacilityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FACILITY_GROUP_NAME: OrderableEdmTypeField<
      DocumentFacilityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FACILITY_NATURE: EnumField<
      DocumentFacilityTypes<DeSerializers>,
      DeSerializersT,
      BankDocumentType,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DocumentFacilityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link documentFacilityGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENT_FACILITY_GROUP: OneToOneLink<
      DocumentFacilityTypes<DeSerializersT>,
      DeSerializersT,
      DocumentFacilityGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentFacilityTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link facilityGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'FacilityGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link facilityNature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_NATURE: fieldBuilder.buildEnumField(
          'FacilityNature',
          BankDocumentType,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DocumentFacilityTypes)
      };
    }

    return this._schema;
  }
}

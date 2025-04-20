/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DocumentFacilityGroups } from './DocumentFacilityGroups';
import { DocumentFacilityGroupsRequestBuilder } from './DocumentFacilityGroupsRequestBuilder';
import { DocumentFacilityTypesApi } from './DocumentFacilityTypesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class DocumentFacilityGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DocumentFacilityGroups<DeSerializersT>, DeSerializersT>
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
  ): DocumentFacilityGroupsApi<DeSerializersT> {
    return new DocumentFacilityGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link facilityGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACILITY_GROUPS: OneToManyLink<
      DocumentFacilityGroups<DeSerializersT>,
      DeSerializersT,
      DocumentFacilityTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DocumentFacilityTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FACILITY_GROUPS: new OneToManyLink('FacilityGroups', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DocumentFacilityGroups;

  requestBuilder(): DocumentFacilityGroupsRequestBuilder<DeSerializersT> {
    return new DocumentFacilityGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DocumentFacilityGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DocumentFacilityGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DocumentFacilityGroups<DeSerializersT>,
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
    typeof DocumentFacilityGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DocumentFacilityGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FACILITY_GROUP: OrderableEdmTypeField<
      DocumentFacilityGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DocumentFacilityGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link facilityGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FACILITY_GROUPS: OneToManyLink<
      DocumentFacilityGroups<DeSerializersT>,
      DeSerializersT,
      DocumentFacilityTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DocumentFacilityGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link facilityGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FACILITY_GROUP: fieldBuilder.buildEdmTypeField(
          'FacilityGroup',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', DocumentFacilityGroups)
      };
    }

    return this._schema;
  }
}

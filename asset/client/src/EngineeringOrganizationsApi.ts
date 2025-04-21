/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringOrganizations } from './EngineeringOrganizations';
import { EngineeringOrganizationsRequestBuilder } from './EngineeringOrganizationsRequestBuilder';
import { EngineeringProductCategoryDetailsApi } from './EngineeringProductCategoryDetailsApi';
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
export class EngineeringOrganizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EngineeringOrganizations<DeSerializersT>, DeSerializersT>
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
  ): EngineeringOrganizationsApi<DeSerializersT> {
    return new EngineeringOrganizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      EngineeringOrganizations<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EngineeringProductCategoryDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ENGINEERING_PRODUCT_CATEGORY_DETAILS: new OneToManyLink(
        'EngineeringProductCategoryDetails',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EngineeringOrganizations;

  requestBuilder(): EngineeringOrganizationsRequestBuilder<DeSerializersT> {
    return new EngineeringOrganizationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EngineeringOrganizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringOrganizations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringOrganizations<DeSerializersT>,
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
    typeof EngineeringOrganizations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringOrganizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENGINEERING_ORGANIZATION_ID: OrderableEdmTypeField<
      EngineeringOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      EngineeringOrganizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link engineeringProductCategoryDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_PRODUCT_CATEGORY_DETAILS: OneToManyLink<
      EngineeringOrganizations<DeSerializersT>,
      DeSerializersT,
      EngineeringProductCategoryDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EngineeringOrganizations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link engineeringOrganizationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_ORGANIZATION_ID: fieldBuilder.buildEdmTypeField(
          'EngineeringOrganizationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationPartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EngineeringOrganizations)
      };
    }

    return this._schema;
  }
}

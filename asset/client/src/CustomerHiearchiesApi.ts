/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerHiearchies } from './CustomerHiearchies';
import { CustomerHiearchiesRequestBuilder } from './CustomerHiearchiesRequestBuilder';
import { CustomerHierarchyNodesApi } from './CustomerHierarchyNodesApi';
import { CdsPartiesApi } from './CdsPartiesApi';
import { CustomerHierarchyCatalogsApi } from './CustomerHierarchyCatalogsApi';
import { CustHierarchyPurpose } from './CustHierarchyPurpose';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerHiearchiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerHiearchies<DeSerializersT>, DeSerializersT>
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
  ): CustomerHiearchiesApi<DeSerializersT> {
    return new CustomerHiearchiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_NODE: OneToManyLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_CATALOG: OneToManyLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyCatalogsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerHierarchyNodesApi<DeSerializersT>,
      CdsPartiesApi<DeSerializersT>,
      CustomerHierarchyCatalogsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_HIERARCHY_NODE: new OneToManyLink(
        'CustomerHierarchyNode',
        this,
        linkedApis[0]
      ),
      CDS_PARTY: new OneToOneLink('CDSParty', this, linkedApis[1]),
      CUSTOMER_HIERARCHY_CATALOG: new OneToManyLink(
        'CustomerHierarchyCatalog',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CustomerHiearchies;

  requestBuilder(): CustomerHiearchiesRequestBuilder<DeSerializersT> {
    return new CustomerHiearchiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerHiearchies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerHiearchies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerHiearchies<DeSerializersT>,
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
    typeof CustomerHiearchies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerHiearchies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER_HIERARCHY_ID: OrderableEdmTypeField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SELLER_CHANNEL: OrderableEdmTypeField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENT_VERSION: OrderableEdmTypeField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: EnumField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      CustHierarchyPurpose,
      true,
      true
    >;
    ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      CustomerHiearchies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_NODE: OneToManyLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerHierarchyCatalog} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY_CATALOG: OneToManyLink<
      CustomerHiearchies<DeSerializersT>,
      DeSerializersT,
      CustomerHierarchyCatalogsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerHiearchies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link customerHierarchyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_HIERARCHY_ID: fieldBuilder.buildEdmTypeField(
          'CustomerHierarchyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sellerChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SELLER_CHANNEL: fieldBuilder.buildEdmTypeField(
          'SellerChannel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currentVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_VERSION: fieldBuilder.buildEdmTypeField(
          'CurrentVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEnumField(
          'Purpose',
          CustHierarchyPurpose,
          true
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
        ALL_FIELDS: new AllFields('*', CustomerHiearchies)
      };
    }

    return this._schema;
  }
}

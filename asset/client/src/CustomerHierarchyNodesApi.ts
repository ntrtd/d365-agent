/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerHierarchyNodes } from './CustomerHierarchyNodes';
import { CustomerHierarchyNodesRequestBuilder } from './CustomerHierarchyNodesRequestBuilder';
import { CustomerHiearchiesApi } from './CustomerHiearchiesApi';
import { CdsPartiesApi } from './CdsPartiesApi';
import { CustHierarchyNodeRole } from './CustHierarchyNodeRole';
import { CustHierarchyNodeType } from './CustHierarchyNodeType';
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
export class CustomerHierarchyNodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerHierarchyNodes<DeSerializersT>, DeSerializersT>
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
  ): CustomerHierarchyNodesApi<DeSerializersT> {
    return new CustomerHierarchyNodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToOneLink<
      CustomerHierarchyNodes<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CustomerHierarchyNodes<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CustomerHiearchiesApi<DeSerializersT>,
      CdsPartiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOMER_HIERARCHY: new OneToOneLink(
        'CustomerHierarchy',
        this,
        linkedApis[0]
      ),
      CDS_PARTY: new OneToOneLink('CDSParty', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = CustomerHierarchyNodes;

  requestBuilder(): CustomerHierarchyNodesRequestBuilder<DeSerializersT> {
    return new CustomerHierarchyNodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerHierarchyNodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CustomerHierarchyNodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerHierarchyNodes<DeSerializersT>,
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
    typeof CustomerHierarchyNodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerHierarchyNodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CUSTOMER_HIERARCHY_ID: OrderableEdmTypeField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NODE_PARTY_NUMBER: OrderableEdmTypeField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE: EnumField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      CustHierarchyNodeRole,
      true,
      true
    >;
    NODE_TYPE: EnumField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      CustHierarchyNodeType,
      true,
      true
    >;
    VERSION_ADDED: OrderableEdmTypeField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VERSION_REMOVED: OrderableEdmTypeField<
      CustomerHierarchyNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerHierarchy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_HIERARCHY: OneToOneLink<
      CustomerHierarchyNodes<DeSerializersT>,
      DeSerializersT,
      CustomerHiearchiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      CustomerHierarchyNodes<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerHierarchyNodes<DeSerializers>>;
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
         * Static representation of the {@link nodePartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NODE_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'NodePartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEnumField('Role', CustHierarchyNodeRole, true),
        /**
         * Static representation of the {@link nodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NODE_TYPE: fieldBuilder.buildEnumField(
          'NodeType',
          CustHierarchyNodeType,
          true
        ),
        /**
         * Static representation of the {@link versionAdded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_ADDED: fieldBuilder.buildEdmTypeField(
          'VersionAdded',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link versionRemoved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION_REMOVED: fieldBuilder.buildEdmTypeField(
          'VersionRemoved',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerHierarchyNodes)
      };
    }

    return this._schema;
  }
}

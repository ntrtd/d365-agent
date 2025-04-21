/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStaffs } from './RetailStaffs';
import { RetailStaffsRequestBuilder } from './RetailStaffsRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
import { RetailCashierSalesPersonOther } from './RetailCashierSalesPersonOther';
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
export class RetailStaffsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStaffs<DeSerializersT>, DeSerializersT>
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
  ): RetailStaffsApi<DeSerializersT> {
    return new RetailStaffsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      RetailStaffs<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailStaffs<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      RetailTillLayoutsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0]),
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailStaffs;

  requestBuilder(): RetailStaffsRequestBuilder<DeSerializersT> {
    return new RetailStaffsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStaffs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailStaffs<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailStaffs<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailStaffs, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailStaffs, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_TYPE: EnumField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      RetailCashierSalesPersonOther,
      true,
      true
    >;
    NAME_ON_RECEIPT: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CULTURE_NAME: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_IDENTIFIER: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_ID: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_SUB_IDENTIFIER: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMAGE: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_IDENTITY_ALIAS: OrderableEdmTypeField<
      RetailStaffs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      RetailStaffs<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailStaffs<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailStaffs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE: fieldBuilder.buildEnumField(
          'EmploymentType',
          RetailCashierSalesPersonOther,
          true
        ),
        /**
         * Static representation of the {@link nameOnReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ON_RECEIPT: fieldBuilder.buildEdmTypeField(
          'NameOnReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cultureName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CULTURE_NAME: fieldBuilder.buildEdmTypeField(
          'CultureName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'ExternalIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME: fieldBuilder.buildEdmTypeField(
          'ExternalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalSubIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_SUB_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'ExternalSubIdentifier',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link image} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE: fieldBuilder.buildEdmTypeField('Image', 'Edm.String', true),
        /**
         * Static representation of the {@link externalIdentityAlias} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_IDENTITY_ALIAS: fieldBuilder.buildEdmTypeField(
          'ExternalIdentityAlias',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStaffs)
      };
    }

    return this._schema;
  }
}

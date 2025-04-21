/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkerContactsV3 } from './WorkerContactsV3';
import { WorkerContactsV3RequestBuilder } from './WorkerContactsV3RequestBuilder';
import { WorkersApi } from './WorkersApi';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
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
export class WorkerContactsV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkerContactsV3<DeSerializersT>, DeSerializersT>
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
  ): WorkerContactsV3Api<DeSerializersT> {
    return new WorkerContactsV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      WorkerContactsV3<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [WorkersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      WORKER: new OneToOneLink('Worker', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = WorkerContactsV3;

  requestBuilder(): WorkerContactsV3RequestBuilder<DeSerializersT> {
    return new WorkerContactsV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkerContactsV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkerContactsV3<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkerContactsV3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkerContactsV3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkerContactsV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_ADDRESS_ID: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATOR: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MOBILE_PHONE: EnumField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATOR_EXTENSION: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_CODE: OrderableEdmTypeField<
      WorkerContactsV3<DeSerializers>,
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
      WorkerContactsV3<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkerContactsV3<DeSerializers>>;
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
         * Static representation of the {@link electronicAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicAddressId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link locator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR: fieldBuilder.buildEdmTypeField('Locator', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOBILE_PHONE: fieldBuilder.buildEnumField(
          'IsMobilePhone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link locatorExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR_EXTENSION: fieldBuilder.buildEdmTypeField(
          'LocatorExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkerContactsV3)
      };
    }

    return this._schema;
  }
}

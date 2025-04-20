/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LocationRoleCds } from './LocationRoleCds';
import { LocationRoleCdsRequestBuilder } from './LocationRoleCdsRequestBuilder';
import { NoYes } from './NoYes';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';
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
export class LocationRoleCdsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LocationRoleCds<DeSerializersT>, DeSerializersT>
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
  ): LocationRoleCdsApi<DeSerializersT> {
    return new LocationRoleCdsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LocationRoleCds;

  requestBuilder(): LocationRoleCdsRequestBuilder<DeSerializersT> {
    return new LocationRoleCdsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LocationRoleCds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LocationRoleCds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LocationRoleCds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LocationRoleCds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LocationRoleCds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PURPOSE: OrderableEdmTypeField<
      LocationRoleCds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_CONTACT_INFORMATION: EnumField<
      LocationRoleCds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_POSTAL_ADDRESS: EnumField<
      LocationRoleCds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TYPE: EnumField<
      LocationRoleCds<DeSerializers>,
      DeSerializersT,
      LogisticsLocationRoleType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LocationRoleCds<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', false),
        /**
         * Static representation of the {@link isContactInformation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONTACT_INFORMATION: fieldBuilder.buildEnumField(
          'IsContactInformation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isPostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTAL_ADDRESS: fieldBuilder.buildEnumField(
          'IsPostalAddress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsLocationRoleType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LocationRoleCds)
      };
    }

    return this._schema;
  }
}

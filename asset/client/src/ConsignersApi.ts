/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Consigners } from './Consigners';
import { ConsignersRequestBuilder } from './ConsignersRequestBuilder';
import { ConsignerGroupsApi } from './ConsignerGroupsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ConsignersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Consigners<DeSerializersT>, DeSerializersT>
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
  ): ConsignersApi<DeSerializersT> {
    return new ConsignersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link consignerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNER_GROUP: OneToOneLink<
      Consigners<DeSerializersT>,
      DeSerializersT,
      ConsignerGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ConsignerGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CONSIGNER_GROUP: new OneToOneLink('ConsignerGroup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Consigners;

  requestBuilder(): ConsignersRequestBuilder<DeSerializersT> {
    return new ConsignersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Consigners<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Consigners<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Consigners<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Consigners, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Consigners, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Consigners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      Consigners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Consigners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIGNER_GROUP_ID: OrderableEdmTypeField<
      Consigners<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link consignerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONSIGNER_GROUP: OneToOneLink<
      Consigners<DeSerializersT>,
      DeSerializersT,
      ConsignerGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Consigners<DeSerializers>>;
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
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link consignerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIGNER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ConsignerGroupId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Consigners)
      };
    }

    return this._schema;
  }
}

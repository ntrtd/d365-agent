/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccountCompanies } from './MainAccountCompanies';
import { MainAccountCompaniesRequestBuilder } from './MainAccountCompaniesRequestBuilder';
import { LegalEntitiesApi } from './LegalEntitiesApi';
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
export class MainAccountCompaniesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MainAccountCompanies<DeSerializersT>, DeSerializersT>
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
  ): MainAccountCompaniesApi<DeSerializersT> {
    return new MainAccountCompaniesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      MainAccountCompanies<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [LegalEntitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MainAccountCompanies;

  requestBuilder(): MainAccountCompaniesRequestBuilder<DeSerializersT> {
    return new MainAccountCompaniesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MainAccountCompanies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MainAccountCompanies<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MainAccountCompanies<DeSerializersT>,
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
    typeof MainAccountCompanies,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MainAccountCompanies,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      MainAccountCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      MainAccountCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      MainAccountCompanies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      MainAccountCompanies<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MainAccountCompanies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'MainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccountCompanies)
      };
    }

    return this._schema;
  }
}

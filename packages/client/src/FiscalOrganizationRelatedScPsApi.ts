/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalOrganizationRelatedScPs } from './FiscalOrganizationRelatedScPs';
import { FiscalOrganizationRelatedScPsRequestBuilder } from './FiscalOrganizationRelatedScPsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class FiscalOrganizationRelatedScPsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalOrganizationRelatedScPs<DeSerializersT>, DeSerializersT>
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
  ): FiscalOrganizationRelatedScPsApi<DeSerializersT> {
    return new FiscalOrganizationRelatedScPsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalOrganizationRelatedScPs;

  requestBuilder(): FiscalOrganizationRelatedScPsRequestBuilder<DeSerializersT> {
    return new FiscalOrganizationRelatedScPsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalOrganizationRelatedScPs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalOrganizationRelatedScPs<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalOrganizationRelatedScPs<DeSerializersT>,
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
    typeof FiscalOrganizationRelatedScPs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalOrganizationRelatedScPs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      FiscalOrganizationRelatedScPs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      FiscalOrganizationRelatedScPs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      FiscalOrganizationRelatedScPs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalOrganizationRelatedScPs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FiscalOrganizationRelatedScPs<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link rootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishmentDataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rootFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalOrganizationRelatedScPs)
      };
    }

    return this._schema;
  }
}

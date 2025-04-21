/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalEstablishmentIePerStates } from './FiscalEstablishmentIePerStates';
import { FiscalEstablishmentIePerStatesRequestBuilder } from './FiscalEstablishmentIePerStatesRequestBuilder';
import { FiscalEstablishmentsApi } from './FiscalEstablishmentsApi';
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
export class FiscalEstablishmentIePerStatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalEstablishmentIePerStates<DeSerializersT>, DeSerializersT>
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
  ): FiscalEstablishmentIePerStatesApi<DeSerializersT> {
    return new FiscalEstablishmentIePerStatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      FiscalEstablishmentIePerStates<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FiscalEstablishmentsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FISCAL_ESTABLISHMENT: new OneToOneLink(
        'FiscalEstablishment',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = FiscalEstablishmentIePerStates;

  requestBuilder(): FiscalEstablishmentIePerStatesRequestBuilder<DeSerializersT> {
    return new FiscalEstablishmentIePerStatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalEstablishmentIePerStates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalEstablishmentIePerStates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalEstablishmentIePerStates<DeSerializersT>,
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
    typeof FiscalEstablishmentIePerStates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalEstablishmentIePerStates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalEstablishmentIePerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FiscalEstablishmentIePerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      FiscalEstablishmentIePerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      FiscalEstablishmentIePerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IE: OrderableEdmTypeField<
      FiscalEstablishmentIePerStates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fiscalEstablishment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FISCAL_ESTABLISHMENT: OneToOneLink<
      FiscalEstablishmentIePerStates<DeSerializersT>,
      DeSerializersT,
      FiscalEstablishmentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FiscalEstablishmentIePerStates<DeSerializers>>;
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
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ie} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IE: fieldBuilder.buildEdmTypeField('IE', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalEstablishmentIePerStates)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegulatoryEstablishments } from './RegulatoryEstablishments';
import { RegulatoryEstablishmentsRequestBuilder } from './RegulatoryEstablishmentsRequestBuilder';
import { RegulatoryEstablishmentDetailsApi } from './RegulatoryEstablishmentDetailsApi';
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
export class RegulatoryEstablishmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RegulatoryEstablishments<DeSerializersT>, DeSerializersT>
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
  ): RegulatoryEstablishmentsApi<DeSerializersT> {
    return new RegulatoryEstablishmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link establishmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESTABLISHMENT_DETAILS: OneToManyLink<
      RegulatoryEstablishments<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RegulatoryEstablishmentDetailsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ESTABLISHMENT_DETAILS: new OneToManyLink(
        'EstablishmentDetails',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RegulatoryEstablishments;

  requestBuilder(): RegulatoryEstablishmentsRequestBuilder<DeSerializersT> {
    return new RegulatoryEstablishmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegulatoryEstablishments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RegulatoryEstablishments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RegulatoryEstablishments<DeSerializersT>,
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
    typeof RegulatoryEstablishments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegulatoryEstablishments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGULATORY_ESTABLISHMENT_ID: OrderableEdmTypeField<
      RegulatoryEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RegulatoryEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link establishmentDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ESTABLISHMENT_DETAILS: OneToManyLink<
      RegulatoryEstablishments<DeSerializersT>,
      DeSerializersT,
      RegulatoryEstablishmentDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RegulatoryEstablishments<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link regulatoryEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATORY_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'RegulatoryEstablishmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegulatoryEstablishments)
      };
    }

    return this._schema;
  }
}

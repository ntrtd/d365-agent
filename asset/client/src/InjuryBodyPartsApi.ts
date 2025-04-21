/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InjuryBodyParts } from './InjuryBodyParts';
import { InjuryBodyPartsRequestBuilder } from './InjuryBodyPartsRequestBuilder';
import { InjuryIncidentsApi } from './InjuryIncidentsApi';
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
export class InjuryBodyPartsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InjuryBodyParts<DeSerializersT>, DeSerializersT>
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
  ): InjuryBodyPartsApi<DeSerializersT> {
    return new InjuryBodyPartsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENTS: OneToManyLink<
      InjuryBodyParts<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InjuryIncidentsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INJURY_INCIDENTS: new OneToManyLink(
        'InjuryIncidents',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InjuryBodyParts;

  requestBuilder(): InjuryBodyPartsRequestBuilder<DeSerializersT> {
    return new InjuryBodyPartsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InjuryBodyParts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InjuryBodyParts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<InjuryBodyParts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof InjuryBodyParts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InjuryBodyParts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BODY_PART_ID: OrderableEdmTypeField<
      InjuryBodyParts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      InjuryBodyParts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link injuryIncidents} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INJURY_INCIDENTS: OneToManyLink<
      InjuryBodyParts<DeSerializersT>,
      DeSerializersT,
      InjuryIncidentsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InjuryBodyParts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bodyPartId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BODY_PART_ID: fieldBuilder.buildEdmTypeField(
          'BodyPartId',
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
        ALL_FIELDS: new AllFields('*', InjuryBodyParts)
      };
    }

    return this._schema;
  }
}

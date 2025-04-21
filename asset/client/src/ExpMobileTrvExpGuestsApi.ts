/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileTrvExpGuests } from './ExpMobileTrvExpGuests';
import { ExpMobileTrvExpGuestsRequestBuilder } from './ExpMobileTrvExpGuestsRequestBuilder';
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
export class ExpMobileTrvExpGuestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpMobileTrvExpGuests<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileTrvExpGuestsApi<DeSerializersT> {
    return new ExpMobileTrvExpGuestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileTrvExpGuests;

  requestBuilder(): ExpMobileTrvExpGuestsRequestBuilder<DeSerializersT> {
    return new ExpMobileTrvExpGuestsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileTrvExpGuests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpMobileTrvExpGuests<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileTrvExpGuests<DeSerializersT>,
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
    typeof ExpMobileTrvExpGuests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileTrvExpGuests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENT_REC_ID: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TRANS_NUMBER: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATING_WORKER: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GUEST_ID: OrderableEdmTypeField<
      ExpMobileTrvExpGuests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileTrvExpGuests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENT_REC_ID: fieldBuilder.buildEdmTypeField(
          'EntRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link expTransNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TRANS_NUMBER: fieldBuilder.buildEdmTypeField(
          'ExpTransNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link creatingWorker} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATING_WORKER: fieldBuilder.buildEdmTypeField(
          'CreatingWorker',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link guestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUEST_ID: fieldBuilder.buildEdmTypeField('GuestId', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileTrvExpGuests)
      };
    }

    return this._schema;
  }
}

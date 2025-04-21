/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FieldServiceProjProjectCanCreateJournals } from './FieldServiceProjProjectCanCreateJournals';
import { FieldServiceProjProjectCanCreateJournalsRequestBuilder } from './FieldServiceProjProjectCanCreateJournalsRequestBuilder';
import { ProjStatus } from './ProjStatus';
import { ProjType } from './ProjType';
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
export class FieldServiceProjProjectCanCreateJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FieldServiceProjProjectCanCreateJournals<DeSerializersT>,
      DeSerializersT
    >
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
  ): FieldServiceProjProjectCanCreateJournalsApi<DeSerializersT> {
    return new FieldServiceProjProjectCanCreateJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FieldServiceProjProjectCanCreateJournals;

  requestBuilder(): FieldServiceProjProjectCanCreateJournalsRequestBuilder<DeSerializersT> {
    return new FieldServiceProjProjectCanCreateJournalsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FieldServiceProjProjectCanCreateJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FieldServiceProjProjectCanCreateJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FieldServiceProjProjectCanCreateJournals<DeSerializersT>,
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
    typeof FieldServiceProjProjectCanCreateJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FieldServiceProjProjectCanCreateJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FieldServiceProjProjectCanCreateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      FieldServiceProjProjectCanCreateJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATUS: EnumField<
      FieldServiceProjProjectCanCreateJournals<DeSerializers>,
      DeSerializersT,
      ProjStatus,
      true,
      true
    >;
    TYPE: EnumField<
      FieldServiceProjProjectCanCreateJournals<DeSerializers>,
      DeSerializersT,
      ProjType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FieldServiceProjProjectCanCreateJournals<DeSerializers>
    >;
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
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', false),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', ProjStatus, true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', ProjType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FieldServiceProjProjectCanCreateJournals)
      };
    }

    return this._schema;
  }
}

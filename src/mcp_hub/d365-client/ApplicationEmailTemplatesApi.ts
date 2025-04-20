/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicationEmailTemplates } from './ApplicationEmailTemplates';
import { ApplicationEmailTemplatesRequestBuilder } from './ApplicationEmailTemplatesRequestBuilder';
import { HrmApplicationCorrespondanceAction } from './HrmApplicationCorrespondanceAction';
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
export class ApplicationEmailTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ApplicationEmailTemplates<DeSerializersT>, DeSerializersT>
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
  ): ApplicationEmailTemplatesApi<DeSerializersT> {
    return new ApplicationEmailTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicationEmailTemplates;

  requestBuilder(): ApplicationEmailTemplatesRequestBuilder<DeSerializersT> {
    return new ApplicationEmailTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicationEmailTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApplicationEmailTemplates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApplicationEmailTemplates<DeSerializersT>,
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
    typeof ApplicationEmailTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicationEmailTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ApplicationEmailTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICATION_EMAIL_TEMPLATE: OrderableEdmTypeField<
      ApplicationEmailTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      ApplicationEmailTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CORRESPONDENCE_ACTION: EnumField<
      ApplicationEmailTemplates<DeSerializers>,
      DeSerializersT,
      HrmApplicationCorrespondanceAction,
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      ApplicationEmailTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicationEmailTemplates<DeSerializers>>;
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
         * Static representation of the {@link applicationEmailTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_EMAIL_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'ApplicationEmailTemplate',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('Subject', 'Edm.String', true),
        /**
         * Static representation of the {@link correspondenceAction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CORRESPONDENCE_ACTION: fieldBuilder.buildEnumField(
          'CorrespondenceAction',
          HrmApplicationCorrespondanceAction,
          true
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('Text', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApplicationEmailTemplates)
      };
    }

    return this._schema;
  }
}
